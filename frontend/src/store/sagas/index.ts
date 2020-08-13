import { takeEvery, all } from 'redux-saga/effects';
import { AUTH_USER } from "../actionTypes";
import { authUserSaga } from "./auth";

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_USER, authUserSaga)
  ]);
}
