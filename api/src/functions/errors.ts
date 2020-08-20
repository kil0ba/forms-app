import { ResponseError } from "../types/shared/error";

export const errorCatch = (err: any, next: any) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  next(err);
  // return err;
};

export const errorCreator = (message: string, statusCode?: number): ResponseError => {
  const error = new Error(message) as ResponseError;
  error.statusCode = statusCode || 500;
  throw error;
}
