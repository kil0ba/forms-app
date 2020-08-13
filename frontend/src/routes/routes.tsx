import { RouteModel } from "./route.model";
import DummyPage from "../pages/DummyPage";
import Login from "../pages/Auth/Login/Login";
import Logout from "../pages/Auth/Logout/Logout";

const routes: RouteModel[] = [
  new RouteModel('/', DummyPage),
  new RouteModel('/logout', Logout),
  new RouteModel('**/login', Login, { renderIf: "!login" }),
  new RouteModel('**/signup', DummyPage),
  new RouteModel('/forms/new', DummyPage),
  new RouteModel('/forms/my', DummyPage),
  new RouteModel('/forms/view/:id', DummyPage),
  new RouteModel('/forms/view/:id/results', DummyPage),
  new RouteModel('/forms/view/:id/edit', DummyPage)
];

export default routes;
