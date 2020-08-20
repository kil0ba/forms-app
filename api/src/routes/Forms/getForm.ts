import express, { Router } from "express";
import isAuth from "../../middleware/is-auth";
import { getForm, getUserForms } from "../../controllers/Forms/getForm";

const router: Router = express.Router();

/**
 * Возвращает все формы которые создал пользователь
 */
router.get('/my', isAuth, getUserForms);

/**
 * Возвращает форму по id
 */
router.get('/:id', getForm);

export default router;
