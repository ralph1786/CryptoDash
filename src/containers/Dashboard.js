import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props.selectedCurrency);
    const { currency, price, price_date } = this.props.selectedCurrency;
    return (
      <div>
        <h2>CryptoCurrency Symbol: {currency}</h2>
        <p>Price: {price}</p>
        <span>Today's Date: {price_date}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({ selectedCurrency: state.selectedCurrency });

export default withRouter(connect(mapStateToProps)(Dashboard));
