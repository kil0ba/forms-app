import authRoutes from "./auth";
import formRoutes from "./Forms";
import express, { NextFunction, Request, Response } from "express";
import { ResponseError } from "../types/shared/error";

class Router {
  public static register(server: express.Express): void {
    const router = express.Router()

    router.use('/auth', authRoutes);

    router.use('/forms', formRoutes)

    router.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
      const message = error._message || error.message;
      res.status(error.statusCode).json({
        info: {
          ...error,
          stackTrace: error.stack
        },
        message
      });
      next();
    });

    server.use('/', router);
  }
}

export default Router;
