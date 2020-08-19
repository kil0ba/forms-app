import express, {Router} from "express";

import isAuth from "../../middleware/is-auth";
import * as saveFormControllers from '../../controllers/Forms/save-form';

const router: Router = express.Router();

router.put('/create', isAuth, saveFormControllers.createForm);

export default router;
