export type Auth = (email: string, password: string) => { type: string, email: string, password: string }

export type AuthError = (error: string) => { type: string, error: string }

export type AuthSuccess = (token: string, userId: string) => { type: string, token: string, userId: string }
