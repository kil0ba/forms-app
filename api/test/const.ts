

export const testResponse = () => ({
  statusCode: null,
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(data) {
    this.token = data.token;
    this.message = data.message;
  }
});
