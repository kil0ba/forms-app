import { Route } from "./route";
import DummyPage from "../pages/DummyPage";
import Login from "../pages/Auth/Login/Login";
import Logout from "../pages/Auth/Logout/Logout";
import EditForm from "../pages/Form/EditForm/EditForm";

const routes: Route[] = [
  new Route('/', DummyPage),
  new Route('/logout', Logout),
  new Route('**/login', Login, { renderIf: "!login" }),
  new Route('**/signup', DummyPage),
  new Route('/forms/new', EditForm),
  new Route('/forms/my', DummyPage),
  new Route('/forms/view/:id', DummyPage),
  new Route('/forms/view/:id/results', DummyPage),
  new Route('/forms/view/:id/edit', EditForm)
];

export default routes;
