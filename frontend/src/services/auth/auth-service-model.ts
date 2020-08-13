export type authUserBody = {
  password: string,
  email: string
}

export interface authUserResponse {
  message: string,
  token: string
}
