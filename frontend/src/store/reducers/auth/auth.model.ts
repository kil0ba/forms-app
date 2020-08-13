export class AuthState {
  token?: string;
  userId?: string;
  error?: string;
  loading = false;
}

export interface AuthAction extends Partial<AuthState> {
  type: string;
}
