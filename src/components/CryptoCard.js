import React, { Component } from "react";
import "./CryptoCard.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCurrency } from "../actions";

class CryptoCard extends Component {
  state = {
    price: this.props.info.price,
    priceIncrease: false,
    priceDecrease: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.price !== nextProps.info.price) {
      if (prevState.price < nextProps.info.price) {
        return {
          price: nextProps.info.price,
          priceIncrease: true,
          priceDecrease: false
        };
      } else {
        return {
          price: nextProps.info.price,
          priceIncrease: false,
          priceDecrease: true
        };
      }
    }
    return null;
  }

  priceStyling = () => {
    const { priceIncrease, priceDecrease } = this.state;
    if (!priceIncrease && !priceDecrease) {
      return {
        color: "black"
      };
    } else if (priceIncrease && !priceDecrease) {
      return {
        color: "green"
      };
    } else if (!priceIncrease && priceDecrease) {
      return {
        color: "red"
      };
    }
  };

  showIcon = () => {
    const { priceDecrease, priceIncrease } = this.state;
    if (!priceDecrease && !priceIncrease) {
      return null;
    } else if (priceIncrease) {
      return <i className="fas fa-caret-up fa-lg" />;
    } else if (priceDecrease) {
      return <i className="fas fa-caret-down fa-lg" />;
    }
  };

  render() {
    const { currency, logo_url, name } = this.props.info;
    const priceInt = parseFloat(this.state.price).toFixed(4);
    return (
      <div
        className="cryptoCard"
        onClick={
          this.props.location.pathname === "/dashboard"
            ? () => this.props.selectedCurrency(this.props.info)
            : null
        }
      >
        <h3>
          {name} ({currency})
        </h3>
        <img src={logo_url} alt="currency logo" />
        <span style={this.priceStyling()}>
          ${priceInt} USD {this.showIcon()}
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
