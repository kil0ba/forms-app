import { RequestHandler } from "express";
import { Types } from "mongoose";

import { errorCatch, errorCreator } from "../../../functions/errors";
import { RequestWithToken } from "../../../types/shared/RequestWithToken";


import User from "../../../models/mongoose/user";
import FormModel, { IForm } from '../../../models/mongoose/formModel';
import Input, { IInputDocument } from '../../../models/mongoose/input';
import { InputsValidator } from "./updateFormValidators";
import InputModel from "../../../models/mongoose/input";
import { IIdParam } from "../../../types/shared/Params";

export const createForm: RequestHandler = async (req: RequestWithToken<IForm>, res, next) => {
  const formInfo = req.body.formInfo;
  const userId = req.userId;
  const inputs = req.body.inputs;
  const formId = Types.ObjectId();

  const form = new FormModel({
    formInfo,
    userId,
    _id: formId
  });

  try {

    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw errorCreator('Cannot find user', 404);
    }

    const inputsValidation = new InputsValidator(inputs);

    await inputsValidation.validate(inputsValidation);

    const inputsResult = await Input.create(inputs.map(input => {
      input.formId = formId;
      return input;
    })) as unknown as IInputDocument[];

    inputsResult.map(inpRes => {
      form.inputs.push(inpRes)
    });

    const saveRes = await form.save();
    user.forms.push(form);
    await user.save();

    res.json({
      message: 'Form saved successfully',
      saveRes
    });
  } catch (err) {
    errorCatch(err, next);
  }
}

export const deleteForm: RequestHandler = async (req: RequestWithToken<void, IIdParam>, res, next) => {
  const userId = req.userId;
  const formId = req.params.id;

  try {
    const form = await FormModel.findById(formId);

    if (!form) {
      throw errorCreator('Cannot find Form', 404);
    }

    if (form.userId.toString() !== userId) {
      throw errorCreator('Check Your Privilege', 403);
    }

    await InputModel.deleteMany({ _id: form.inputs });

    await form.deleteOne();

    res.json({ message: "Deleted Successfully" })
  } catch (e) {
    errorCatch(e, next);
  }
}
