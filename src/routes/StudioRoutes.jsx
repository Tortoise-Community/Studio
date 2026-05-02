import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../studio/main";
import Dashboard from "../studio/Dash";
import Login from "../studio/Login";

export default function StudioRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/problems" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
