export class NavItem {

  constructor(
    public text: string,
    public url: string,
    public options: NavItemOptions = {}
  ) {
  }
}

interface NavItemOptions {
  displayIf?: 'login' | '!login' | 'always';
}
