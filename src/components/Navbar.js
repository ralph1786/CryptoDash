import React from "react";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <h3>navbar</h3>
    </div>
  );
};

export default withRouter(Navbar);
