import React from "react";
import "./Navbar.scss";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleModal } from "../actions";

const Navbar = props => {
  return (
    <div
      className={
        props.location.pathname === "/dashboard" ? "dash-navbar" : "navbar"
      }
    >
      <Link to="/">
        Crypto<span>Dash</span>
      </Link>
      {props.location.pathname === "/dashboard" ? (
        <span className="currencies" onClick={props.toggleModal}>
          Currencies
        </span>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
