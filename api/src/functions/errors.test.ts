import { errorCatch, errorCreator } from './errors';

describe('errors', () => {
  it('should call next func with err.statusCode = 500', (cb) => {
    const err = new Error('sample');
    const next = (err) => {
      expect(err.statusCode).toBe(500);
      cb();
    }
    errorCatch(err, next);
  })

  it('should throw an error with status 500', () => {
    expect(() => errorCreator('test')).toThrowError();
  })
})
