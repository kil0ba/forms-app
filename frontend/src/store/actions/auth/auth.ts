import * as actionTypes from '../../actionTypes';
import { Auth, AuthError } from "./auth.model";

/**
 * Логин пользователя
 * Используется сагой
 */
export const auth: Auth = ( email: string, password: string ) => {
  return {
    type: actionTypes.AUTH_USER,
    email,
    password
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authError: AuthError = error => {
  return {
    type: actionTypes.AUTH_ERROR,
    error
  }
}
