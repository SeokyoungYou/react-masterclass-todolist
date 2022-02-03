import { BrowserRouter, Switch, Route } from "react-router-dom";
import Animation from "./route/Animation";
import ToDoList from "./components/ToDoList";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/animation">
          <Animation />
        </Route>
        <Route path="/">
          <ToDoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
