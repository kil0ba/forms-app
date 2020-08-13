import * as actionTypes from '../../actionTypes';
import { Auth, AuthError, AuthSuccess } from "./auth.model";

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

export const authSuccess: AuthSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  }
}

export const authError: AuthError = error => {
  return {
    type: actionTypes.AUTH_ERROR,
    error
  }
}

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuth = () => {
  return {
    type: actionTypes.AUTH_CHECK
  }
}
