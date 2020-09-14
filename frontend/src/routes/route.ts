import { FunctionComponent } from "react";

export class Route {
  exact?: boolean;
  name?: string;
  renderIf?: 'login' | '!login' | 'always';

  constructor(
    public path: string,
    public component: FunctionComponent<any>,
    init?: Partial<Route>) {
    this.exact = init?.exact || true;
    this.renderIf = init?.renderIf || 'always';
  }
}
