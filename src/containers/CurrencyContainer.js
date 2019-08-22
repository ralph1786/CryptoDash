import React, { Component, Fragment } from "react";
import CryptoCard from "../components/CryptoCard";
import "./CurrencyContainer.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GridLoader } from "react-spinners";
import ErrorMessage from "../components/ErrorMessage";
import { css } from "@emotion/core";

const CURRENCY_QUERY = gql`
  query CryptoCurrencies {
    currencies {
      currency
      price
      logo_url
      name
      price_date
    }
  }
`;

const override = css`
  display: block;
  grid-column: 2/3;
  margin: 185px auto;
  border-color: red;
`;

class CurrencyContainer extends Component {
  render() {
    return (
      <div className="container">
        <Query query={CURRENCY_QUERY} pollInterval={2000}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <Fragment>
                  <GridLoader
                    css={override}
                    sizeUnit={"px"}
                    size={20}
                    color={"#FFF"}
                  />
                </Fragment>
              );
            if (error) return <ErrorMessage />;
            return (
              <Fragment>
                {data.currencies.map((currency, index) => (
                  <CryptoCard key={index} info={currency} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default CurrencyContainer;
