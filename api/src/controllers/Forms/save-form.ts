import { RequestHandler } from "express";
import { Types } from "mongoose";

import { ICreateForm } from "../../types/requests/forms/save";
import { errorCatch } from "../../functions/errors";
import { RequestWithToken } from "../../types/shared/RequestWithToken";


import User from "../../models/mongoose/user";
import Form from '../../models/mongoose/form';
import Input, { IInput } from '../../models/mongoose/input';

export const createForm: RequestHandler = async (req: RequestWithToken<ICreateForm>, res, next) => {
  const formInfo = req.body.formInfo;
  const userId = req.userId;
  const inputs = req.body.inputs;
  const formId = Types.ObjectId();

  const form = new Form({
    formInfo,
    userId,
    _id: formId
  });

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error('Cannot find user');
    }

    const inputsResult = await Input.create(inputs.map(input => {
      input.formId = formId;
      return input;
    })) as IInput[];

    inputsResult.map(inpRes => {
      form.inputs.push(inpRes)
    });

    const saveRes = await form.save();
    user.forms.push(form);
    await user.save();

    res.json({
      message: 'Form saved successfully',
      saveRes
    })
  } catch (err) {
    err.statusCode = 400;
    errorCatch(err, next);
  }
}
