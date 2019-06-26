import React from "react";
import "./CryptoCard.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCurrency } from "../actions";
import currencyImage from "./currencyImage";

const CryptoCard = props => {
  const { currency, price } = props.info;
  const priceInt = parseFloat(price).toFixed(4);
  return (
    <div
      className="cryptoCard"
      onClick={
        props.location.pathname === "/dashboard"
          ? () => props.selectedCurrency(props.info)
          : () => console.log("hello")
      }
    >
      <h3>{currency}</h3>
      <img src={currencyImage(currency)} alt="currency logo" />
      <span>${priceInt} USD</span>
      {props.location.pathname === "/dashboard" ? null : (
        <Link to="/dashboard">
          <button onClick={() => props.selectedCurrency(props.info)}>
            Dashboard
          </button>
        </Link>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectedCurrency: currencyObj => dispatch(selectedCurrency(currencyObj))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CryptoCard)
);
