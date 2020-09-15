export class AuthState {
  token?: string = undefined;
  userId?: string = undefined;
  error?: string = undefined;
  loading = false;
}

export interface AuthAction extends Partial<AuthState> {
  type: string;
}
