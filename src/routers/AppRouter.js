import React from "react";
import Navbar from "../components/ui/Navbar";
import LoginScreen from "../components/login/LoginScreen";
import { Route, Router, Switch } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/" component={MarvelScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
