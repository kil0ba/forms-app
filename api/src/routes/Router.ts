import authRoutes from "./auth";
import formRoutes from "./Forms/save-form";
import express, { NextFunction, Request, Response } from "express";
import { ResponseError } from "../types/shared/error";

class Router {
  public static register(server: express.Express) {
    const router = express.Router()

    router.use('/auth', authRoutes);

    router.use('/forms', formRoutes)

    router.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
      console.warn(error);
      const message = error._message || error.message;
      res.status(error.statusCode).json({ error, message });
    });

    server.use('/', router);
  }
}

export default Router;
