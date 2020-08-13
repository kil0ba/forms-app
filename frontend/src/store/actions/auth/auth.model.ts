import { AUTH_USER } from "../../actionTypes";

export type Auth = (email: string, password: string) => { type: string, email: string, password: string }

export type AuthError = (error: string) => { type: string, error: string }
