import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../studio/main";
// import Dashboard from "../studio/Dashboard";
import Dashboard from "../studio/Dash";

export default function StudioRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/problems" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
