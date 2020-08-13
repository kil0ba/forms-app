import { authUser } from "../../services/auth/auth-service";
import { put } from "redux-saga/effects";
import { authError, authStart, authSuccess } from "../actions/auth/auth";
import { authUserResponse } from "../../services/auth/auth-service-model";
import { AxiosResponse, AxiosError } from "axios";


export function* authUserSaga(action: any) {
  yield put(authStart())
  try {
    const response: AxiosResponse<authUserResponse> = yield authUser({ password: action.password, email: action.email });
    yield localStorage.setItem('token', response.data.token);
    yield localStorage.setItem('userId', response.data.userId);
    yield put(authSuccess(response.data.token, response.data.userId ));
  } catch (error) {
    const axError = error as AxiosError;
    yield put(authError(axError.response?.data.message));
  }
}

export function* logoutUserSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
}

export function* checkAuthSaga() {
  const token = yield localStorage.getItem('token');
  const userId = yield localStorage.getItem('userId');
  if (token && userId) {
    yield put(authSuccess(token, userId ));
  } else {
    logoutUserSaga();
  }
}
