import React, { useContext } from "react";
import LoginScreen from "../components/login/LoginScreen";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { AuthContext } from "../auth/AuthContext";
import { PublicRouter } from "./PublicRouter";

const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            isAuthenticated={logged}
            path="/login"
            component={LoginScreen}
          />
          <PrivateRouter
            isAuthenticated={logged}
            component={DashboardRoutes}
            path="/"
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
