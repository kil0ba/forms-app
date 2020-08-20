import { Request } from "express";
import { ParamsDictionary } from "./ParamsDictionaty";

export interface RequestWithToken<T, params extends ParamsDictionary = {}> extends Request<params, {}, T> {
  userId: string;
}
