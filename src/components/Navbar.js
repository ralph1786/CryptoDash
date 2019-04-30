import React from "react";
import "./Navbar.scss";
import { withRouter, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Link to="/">
        Crypto<span>Dash</span>
      </Link>
    </div>
  );
};

export default withRouter(Navbar);
