import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Fragment>
  );
}

export default App;
