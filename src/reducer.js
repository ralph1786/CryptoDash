const initialState = {
  cryptoCurrencies: [],
  selectedCurrency: {}
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
    default:
      return state;
  }
};

export default currenciesReducer;
