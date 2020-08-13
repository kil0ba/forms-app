import axios from 'axios';
import { authUserBody, authUserResponse } from "./auth-service-model";
import { AxiosRequest } from "../service.model";

export const authUser: AxiosRequest<authUserBody, authUserResponse> = body => {
  return axios.post<authUserResponse>('/api/auth/login', body);
};
