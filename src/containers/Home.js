import React, { Component, Fragment } from "react";
import CurrencyContainer from "./CurrencyContainer";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="animation">Animation</div>
        <CurrencyContainer />
      </Fragment>
    );
  }
}

export default Home;
