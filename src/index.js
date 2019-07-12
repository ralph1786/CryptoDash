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
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// const store = createStore(currenciesReducer, enhancer);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
