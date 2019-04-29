const initialState = {
  cryptoCurrencies: []
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CURRENCIES":
      return {
        ...state,
        cryptoCurrencies: action.payload
      };
    default:
      return state;
  }
};

export default currenciesReducer;
