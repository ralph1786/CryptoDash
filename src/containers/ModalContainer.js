import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { toggleModal } from "../actions";
import CryptoCard from "../components/CryptoCard";
import "./ModalContainer.scss";

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

const ModalContainer = props => {
  const arrayCurrencies = props.listCurrencies.map((currency, index) => (
    <CryptoCard key={index} info={currency} />
  ));

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.toggleModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="modal-container">{arrayCurrencies}</div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    listCurrencies: state.cryptoCurrencies,
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
