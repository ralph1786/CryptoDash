import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./GeneralInfo.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GridLoader } from "react-spinners";
import { css } from "@emotion/core";
import ErrorMessage from "../components/ErrorMessage";

const CURRENCY_QUERY = gql`
  query CurrencyQuery($currency: String!) {
    currency(currency: $currency) {
      currency
      price
      price_date
      logo_url
      name
    }
  }
`;

const override = css`
  display: block;
  grid-column: 1/2;
  margin: 100px auto;
`;

const GeneralInfo = props => {
  const { currency } = props.chosenCurrency;

  return (
    <Query query={CURRENCY_QUERY} variables={{ currency }} pollInterval={3000}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <Fragment>
              <GridLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={"#007aff"}
              />
            </Fragment>
          );
        }
        if (error) {
          console.log(error);
          return <ErrorMessage />;
        }
        const { logo_url, name, currency, price, price_date } = data.currency;
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
      }}
    </Query>
  );
};

const mapStateToProps = state => {
  return {
    chosenCurrency: state.selectedCurrency
  };
};

export default connect(mapStateToProps)(GeneralInfo);
