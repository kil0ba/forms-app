import { AxiosResponse } from "axios";

export interface AxiosRequest<T, R> {
  (
    body: T
  ): Promise<AxiosResponse<R>>
}
