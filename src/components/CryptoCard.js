import React from "react";
import "./CryptoCard.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCurrency } from "../actions";

const CryptoCard = props => {
  const { currency, price } = props.info;
  return (
    <div className="cryptoCard">
      <h3>{currency}</h3>
      <span>${price} USD</span>
      <Link to="/dashboard">
        <button onClick={() => props.selectedCurrency(props.info)}>
          Dashboard
        </button>
      </Link>
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
