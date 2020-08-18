import { takeEvery, all } from 'redux-saga/effects';
import { AUTH_CHECK, AUTH_LOGOUT, AUTH_USER } from "../actionTypes";
import { authUserSaga, checkAuthSaga, logoutUserSaga } from "./auth";

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_USER, authUserSaga),
    takeEvery(AUTH_LOGOUT, logoutUserSaga),
    takeEvery(AUTH_CHECK, checkAuthSaga)
  ]);
}
