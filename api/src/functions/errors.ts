export const errorCatch = (err: any, next: any) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  next(err);
  // return err;
};
