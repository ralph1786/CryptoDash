import React, { Component } from "react";
import { connect } from "react-redux";
import { allCurrencies } from "../actions";
import { withRouter } from "react-router-dom";
import CryptoCard from "../components/CryptoCard";
import "./CurrencyContainer.scss";

class CurrencyContainer extends Component {
  componentDidMount() {
    this.props.allCurrencies();
  }

  render() {
    const listOfCurrencies = this.props.listCurrencies.map(
      (currency, index) => <CryptoCard key={index} info={currency} />
    );
    return <div className="container">{listOfCurrencies}</div>;
  }
}

const mapStateToProps = state => {
  return {
    listCurrencies: state.cryptoCurrencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allCurrencies: () => dispatch(allCurrencies())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrencyContainer)
);
