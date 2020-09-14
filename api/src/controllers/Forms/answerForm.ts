import { RequestHandler, Request } from "express";

import { RequestWithToken } from "../../types/shared/RequestWithToken";
import { IIdParam } from "../../types/shared/Params";
import AnswerModel, { IAnswer } from "../../models/mongoose/answer";
import { errorCatch, errorCreator } from "../../functions/errors";
import FormModel from "../../models/mongoose/formModel";
import InputModel from "../../models/mongoose/input";
import UserModel from "../../models/mongoose/user";


export const putAnswer: RequestHandler = async (req: Request<null, void, IAnswer>, res, next) => {
  const formId = req.body.formId;
  const answers = req.body.answers;

  try {
    if (answers?.length === 0 || !answers) {
      throw errorCreator('Have no answers', 400);
    }

    const form = await FormModel.findById(formId);

    if (!form) {
      throw errorCreator('Cannot find form by id ' + formId, 404);
    }

    if (answers.length !== form.inputs.length) {
      throw errorCreator('Answers array length does not match inputs array length', 400);
    }

    // Проверка id инпутов
    const inputsIds = answers.map(answer => answer.inputId);

    const inptCount = await InputModel.find({ _id: inputsIds }).count();

    if (answers.length !== inptCount) {
      throw errorCreator('You have an error with input id, one or more are invalid', 400);
    }

    const result = await AnswerModel.create(req.body);

    await result.save();

    res.json(result);
  } catch (e) {
    errorCatch(e, next);
  }
};

export const getAnswers: RequestHandler = async (req: RequestWithToken<void, IIdParam>, res, next) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw errorCreator('Cannot find user', 404);
    }

  } catch (e) {
    errorCatch(e, next);
  }
};
