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
      <footer style={styling}>
        Disclaimer: Data is courtesy of CryptoCompare API.
      </footer>
    </Fragment>
  );
}

const styling = {
  textAlign: "center",
  fontWeight: "300"
};

export default App;
