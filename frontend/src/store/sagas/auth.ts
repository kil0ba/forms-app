import { authUser } from "../../services/auth/auth-service";
import { put } from "redux-saga/effects";
import { authError, authStart } from "../actions/auth/auth";
import { authUserResponse } from "../../services/auth/auth-service-model";
import { AxiosResponse, AxiosError } from "axios";


export function* authUserSaga(action: any) {
  yield put(authStart())
  try {
    const response: AxiosResponse<authUserResponse> = yield authUser({ password: action.password, email: action.email });
    yield localStorage.setItem('token', response.data.token);
  } catch (error) {
    const axError = error as AxiosError;
    yield put(authError(axError.response?.data.message));
  }
}
