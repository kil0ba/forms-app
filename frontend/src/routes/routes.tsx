import { RouteModel } from "./route.model";
import DummyPage from "../pages/DummyPage";
import Login from "../pages/Auth/Login/Login";
import Logout from "../pages/Auth/Logout/Logout";
import EditForm from "../pages/Form/EditForm/EditForm";

const routes: RouteModel[] = [
  new RouteModel('/', DummyPage),
  new RouteModel('/logout', Logout),
  new RouteModel('**/login', Login, { renderIf: "!login" }),
  new RouteModel('**/signup', DummyPage),
  new RouteModel('/forms/new', EditForm),
  new RouteModel('/forms/my', DummyPage),
  new RouteModel('/forms/view/:id', DummyPage),
  new RouteModel('/forms/view/:id/results', DummyPage),
  new RouteModel('/forms/view/:id/edit', EditForm)
];

export default routes;
