import jwt from 'jsonwebtoken';

import { TOKEN_SECRET_KEY } from "../configuration";
import { ResponseError } from "../types/shared/error";

const isAuth = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated') as ResponseError;
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, TOKEN_SECRET_KEY);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.') as ResponseError;
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
  return true;
};

export default isAuth;
