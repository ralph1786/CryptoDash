import axios from "axios";
import { apiKey } from "./constant";

const loadCurrencies = listCurrencies => ({
  type: "LOAD_CURRENCIES",
  payload: listCurrencies
});

export const selectedCurrency = currencyObj => ({
  type: "SELECTED_CURRENCY",
  payload: currencyObj
});

export const allCurrencies = () => {
  return dispatch => {
    return axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}`)
      .then(res => {
        const listCurrencies = res.data.slice(0, 6);
        dispatch(loadCurrencies(listCurrencies));
        // debugger;
      })
      .catch(err => console.log(err));
  };
};
