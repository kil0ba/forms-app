import { RequestHandler, Request } from "express";
import { ParamsDictionary } from "../../types/shared/ParamsDictionaty";
import { errorCatch, errorCreator } from "../../functions/errors";
import FormModel from "../../models/mongoose/formModel";
import { RequestWithToken } from "../../types/shared/RequestWithToken";

interface IGetFormParams extends ParamsDictionary {
  id: string
}

export const getForm: RequestHandler = async (req: Request<IGetFormParams>, res, next) => {
  const _id = req.params.id;

  try {
    const form = await FormModel.findById(_id).populate('inputs');

    if (!form) {
      throw errorCreator('Cannot find form', 404);
    }

    res.json(form);

  } catch (e) {
    errorCatch(e, next);
  }
}

export const getUserForms: RequestHandler = async (req: RequestWithToken<void>, res, next) => {
  const userId = req.userId;

  try {
    const forms = await FormModel.find({ userId });
    res.json(forms);
    return forms;
  } catch (e) {
    errorCatch(e, next);
  }
};
