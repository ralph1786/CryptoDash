import React, { Fragment } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { toggleModal } from "../actions";
import CryptoCard from "../components/CryptoCard";
import "./ModalContainer.scss";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { GridLoader } from "react-spinners";
import ErrorMessage from "../components/ErrorMessage";
import { css } from "@emotion/core";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const override = css`
  display: block;
  grid-column: 2/3;
  margin: 185px auto;
  border-color: red;
`;

const CURRENCIES_QUERY = gql`
  query CurrencyQuery {
    currencies {
      currency
      price
      logo_url
      name
      price_date
    }
  }
`;

const ModalContainer = props => {
  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.toggleModal}
      style={customStyles}
      ariaHideApp={false}
      closeTimeoutMS={500}
    >
      <div className="modal-container">
        <Query query={CURRENCIES_QUERY} pollInterval={3000}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <Fragment>
                  <GridLoader
                    css={override}
                    sizeUnit={"px"}
                    size={20}
                    color={"#2f80ed"}
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
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
