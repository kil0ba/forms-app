import routes from './routes';
import { Route } from './route';

describe('routes', () => {
  it('should have no undefined', async () => {
    routes.map(route =>
      expect(route).toBeTruthy()
    )
  });

  it('should have truthy "exact" and "renderIf" equal "always"', () => {
    const route = new Route('sample', () => {});

    expect(route.exact).toEqual(true);
    expect(route.renderIf).toEqual('always');
  })
});
