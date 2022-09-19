import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import '../src/assets/font.css';
import { Web3ReactProvider } from "@web3-react/core";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import getLibrary from "./utils/getLibrary";
import rootReducer from "./store/reducer";
import rootSaga from "./store/sagas";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.css";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
