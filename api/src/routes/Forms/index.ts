import express from "express";
import saveRoutes from "./updateForm";
import getRoutes from "./getForm";

const router = express.Router()

router.use('/update', saveRoutes);

router.use('/get', getRoutes);

// router.use('/answers')

export default router;
