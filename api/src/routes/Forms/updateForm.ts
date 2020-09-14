import { Router } from "express";

import isAuth from "../../middleware/is-auth";
import * as saveFormControllers from '../../controllers/Forms/Update/updateForm';

const router: Router = Router();

router.put('/create', isAuth, saveFormControllers.createForm);

router.delete('/:id', isAuth, saveFormControllers.deleteForm);

export default router;
