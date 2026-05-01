import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../studio/main";

export default function StudioRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
