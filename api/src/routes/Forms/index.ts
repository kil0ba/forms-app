import express from "express";
import saveRoutes from "./updateForm";
import getRoutes from "./getForm";
import answerRoutes from "./answerForm";

const router = express.Router()

router.use('/update', saveRoutes);

router.use('/get', getRoutes);

router.use('/answers', answerRoutes);

export default router;
