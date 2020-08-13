import { FunctionComponent } from "react";

export class RouteModel {
  exact?: boolean;
  name?: string;
  renderIf?: 'login' | '!login' | 'always';

  constructor(public path: string, public component: FunctionComponent<any>, init?: Partial<RouteModel>) {
    this.exact = init?.exact || true;
    this.renderIf = init?.renderIf || 'always';
  }
}
