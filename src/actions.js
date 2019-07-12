// import axios from "axios";
// import { apiKey } from "./constant";

// const loadCurrencies = listCurrencies => ({
//   type: "LOAD_CURRENCIES",
//   payload: listCurrencies
// });

export const toggleModal = () => ({
  type: "TOGGLE_MODAL"
});

export const selectedCurrency = currencyObj => ({
  type: "SELECTED_CURRENCY",
  payload: currencyObj
});

// export const allCurrencies = () => {
//   return dispatch => {
//     return axios
//       .get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}`)
//       .then(res => {
//         const listCurrencies = res.data.slice(0, 6);
//         // console.log(res.data);
//         dispatch(loadCurrencies(listCurrencies));
//       })
//       .catch(err => console.log(err));
//   };
// };
