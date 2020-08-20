export interface Dictionary<T> {
  [key: string]: T;
}

export type ParamsDictionary = Dictionary<string>;
