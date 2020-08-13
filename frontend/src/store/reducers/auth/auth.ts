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
      return newState;
    case actionTypes.AUTH_ERROR:
      newState.error = action.error!;
      return newState;
    default:
      return state;
  }
};

export default authReducer;
