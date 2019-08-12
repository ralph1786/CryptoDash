import React, { Component } from "react";
import "./CryptoCard.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCurrency } from "../actions";
// import currencyImage from "./currencyImage";

class CryptoCard extends Component {
  state = {
    price: this.props.info.price,
    priceIncrease: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.price !== nextProps.info.price) {
      if (prevState.price < nextProps.info.price) {
        return {
          price: nextProps.info.price,
          priceIncrease: true
        };
      } else {
        return {
          price: nextProps.info.price,
          priceIncrease: false
        };
      }
    }
    return null;
  }

  render() {
    const { currency, logo_url, name } = this.props.info;
    const priceInt = parseFloat(this.state.price).toFixed(4);
    // console.log(this.state.priceIncrease);
    return (
      <div
        className="cryptoCard"
        onClick={
          this.props.location.pathname === "/dashboard"
            ? () => this.props.selectedCurrency(this.props.info)
            : () => console.log("hello")
        }
      >
        <h3>
          {name} ({currency})
        </h3>
        <img src={logo_url} alt="currency logo" />
        <span
          style={
            this.state.priceIncrease ? { color: "green" } : { color: "red" }
          }
        >
          ${priceInt} USD
        </span>
        {this.props.location.pathname === "/dashboard" ? null : (
          <Link to="/dashboard">
            <button
              onClick={() => this.props.selectedCurrency(this.props.info)}
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    );
  }
}

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
