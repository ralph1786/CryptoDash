import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import currenciesReducer from "./reducer";
// import thunk from "redux-thunk";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// const store = createStore(currenciesReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
