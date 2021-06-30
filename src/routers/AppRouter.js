import React from "react";
import Navbar from "../components/ui/Navbar";
import LoginScreen from "../components/login/LoginScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <DashboardRoutes />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
