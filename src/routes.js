import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Wall from './components/dash/components/wall/Wall';
import Page404 from "./components/page404/Page404";
import Tasks from "./components/dash/components/tasks/Tasks";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/lim-2018-01-todo-list-frameworks/" component={Wall} />
      <Route exact path="/lim-2018-01-todo-list-frameworks/tasks" component={Tasks} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;