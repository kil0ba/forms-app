import { Request } from "express";

export interface RequestWithToken<T> extends Request<{}, {}, T> {
  userId: string;
}
