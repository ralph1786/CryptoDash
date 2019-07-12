import React from "react";
import { connect } from "react-redux";
// import currencyImage from "./currencyImage";
import "./GeneralInfo.scss";

const GeneralInfo = props => {
  const { currency, price, price_date, logo_url, name } = props.chosenCurrency;

  return (
    <div className="basic-info">
      <img src={logo_url} alt="currency logo" />
      <h2>
        Currency: {name} ({currency})
      </h2>
      <p>Current Price: ${parseFloat(price).toFixed(4)}</p>
      <span>Today's Date: {price_date}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chosenCurrency: state.selectedCurrency
  };
};

export default connect(mapStateToProps)(GeneralInfo);
