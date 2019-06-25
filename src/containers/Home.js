import React, { Component, Fragment } from "react";
import CurrencyContainer from "./CurrencyContainer";
// import VideoContainer from "../components/VideoContainer";
import Logo from "../components/Logo";

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <VideoContainer /> */}
        <Logo />
        <CurrencyContainer />
      </Fragment>
    );
  }
}

export default Home;
