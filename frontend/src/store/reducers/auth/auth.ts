import _ from 'lodash';

import {AuthAction, AuthState} from "./auth.model";
import * as actionTypes from '../../actionTypes';

const authReducer = (state: AuthState = new AuthState(), action: AuthAction) => {
  const newState = _.cloneDeep(state);
  newState.error = undefined;
  newState.loading = false;

  switch (action.type) {
    case actionTypes.AUTH_START:
      newState.loading = true;
      break;
    case actionTypes.AUTH_SUCCESS:
      newState.token = action.token;
      newState.userId = action.userId;
      break;
    case actionTypes.AUTH_LOGOUT:
      newState.token = undefined;
      newState.userId = undefined;
      break;
    case actionTypes.AUTH_ERROR:
      newState.error = action.error!;
      break;
  }
  return newState;
};

export default authReducer;
