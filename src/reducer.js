const initialState = {
  cryptoCurrencies: [],
  selectedCurrency: {},
  isModalOpen: false
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CURRENCIES":
      return {
        ...state,
        cryptoCurrencies: action.payload
      };
    case "SELECTED_CURRENCY":
      return {
        ...state,
        selectedCurrency: action.payload
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    default:
      return state;
  }
};

export default currenciesReducer;
