import { Router } from "express";
import isAuth from "../../middleware/is-auth";
import { putAnswer } from "../../controllers/Forms/answerForm";

const router: Router = Router();

/**
 * Отправка ответов по форме
 * /forms/answer/
 */
router.put('/', putAnswer);

/**
 * Получение ответов формы
 * /forms/answer/:id
 */
router.get('/:id', isAuth);

export default router;
