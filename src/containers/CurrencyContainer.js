import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { allCurrencies } from "../actions";
// import { withRouter } from "react-router-dom";
import CryptoCard from "../components/CryptoCard";
import "./CurrencyContainer.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GridLoader } from "react-spinners";
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
  // componentDidMount() {
  //   this.props.allCurrencies();
  // }

  render() {
    // const listOfCurrencies = this.props.listCurrencies.map(
    //   (currency, index) => <CryptoCard key={index} info={currency} />
    // );
    return (
      <div className="container">
        {/* {listOfCurrencies} */}
        <Query query={CURRENCY_QUERY} pollInterval={3000}>
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
            if (error) console.log(error);
            // console.log(data);
            // const slicedData = data.currencies.slice(0, 6);
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

// const mapStateToProps = state => {
//   return {
//     listCurrencies: state.cryptoCurrencies
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     allCurrencies: () => dispatch(allCurrencies())
//   };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CurrencyContainer)
// );

export default CurrencyContainer;
