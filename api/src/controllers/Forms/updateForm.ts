import { RequestHandler } from "express";
import { Types } from "mongoose";

import { ICreateForm } from "../../types/requests/forms/save";
import { errorCatch, errorCreator } from "../../functions/errors";
import { RequestWithToken } from "../../types/shared/RequestWithToken";


import User from "../../models/mongoose/user";
import FormModel from '../../models/mongoose/formModel';
import Input, { IInput } from '../../models/mongoose/input';
import { ParamsDictionary } from "../../types/shared/ParamsDictionaty";
import { InputsValidator } from "./updateFormValidators";
import InputModel from "../../models/mongoose/input";

export const createForm: RequestHandler = async (req: RequestWithToken<ICreateForm>, res, next) => {
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

    await inputsValidation.validateInputs();

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
    });
  } catch (err) {
    errorCatch(err, next);
  }
}

interface IDeleteFormParams extends ParamsDictionary {
  id: string;
}

export const deleteForm: RequestHandler = async (req: RequestWithToken<void, IDeleteFormParams>, res, next) => {
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

    res.json('meh')
  } catch (e) {
    errorCatch(e, next);
  }
}
