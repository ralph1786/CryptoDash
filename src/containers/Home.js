import React, { Component, Fragment } from "react";
import CurrencyContainer from "./CurrencyContainer";
import VideoContainer from "../components/VideoContainer";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <VideoContainer />
        <CurrencyContainer />
      </Fragment>
    );
  }
}

export default Home;
