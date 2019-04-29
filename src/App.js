import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
}

export default App;
