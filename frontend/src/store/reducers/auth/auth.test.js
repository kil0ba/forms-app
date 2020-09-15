import { AuthState } from './auth.model';
import authReducer from './auth';

describe('auth reducer', () => {
  it('should create new default state', () => {
    const newState = new AuthState();
    const reducerState = authReducer();
    expect(reducerState).toStrictEqual(newState);
  })
})
