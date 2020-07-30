import * as authControllers from "../controllers/auth";

import express, {Router} from "express";

const router: Router = express.Router();
// POST /auth/signUp
router.post('/signUp', authControllers.signUp);

// POST /auth/login
router.post('/login', authControllers.login);

export default router;
