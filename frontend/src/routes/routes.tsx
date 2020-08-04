import { RouteModel } from "./route.model";
import DummyPage from "../pages/DummyPage";
import Auth from "../pages/Auth/Auth";

const routes: RouteModel[] = [
  new RouteModel('/', DummyPage),
  new RouteModel('/login', Auth),
  new RouteModel('/signup', DummyPage),
  new RouteModel('/forms/new', DummyPage),
  new RouteModel('/forms/my', DummyPage),
  new RouteModel('/forms/view/:id', DummyPage),
  new RouteModel('/forms/view/:id/results', DummyPage),
  new RouteModel('/forms/view/:id/edit', DummyPage)
];

export default routes;
