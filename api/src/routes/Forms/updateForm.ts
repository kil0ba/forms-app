import express, {Router} from "express";

import isAuth from "../../middleware/is-auth";
import * as saveFormControllers from '../../controllers/Forms/updateForm';
import { deleteForm } from "../../controllers/Forms/updateForm";

const router: Router = express.Router();

router.put('/create', isAuth, saveFormControllers.createForm);

router.delete('/:id', isAuth, deleteForm);

export default router;
