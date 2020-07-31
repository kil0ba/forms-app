export class AuthInitialState {
  token = null;
  userId = null;
  error = null;
  loading = false;
}

export interface AuthAction {
  type: string;
}
