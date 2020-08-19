export interface ResponseError extends Error {
  statusCode?: number;
  _message?: string;
}
