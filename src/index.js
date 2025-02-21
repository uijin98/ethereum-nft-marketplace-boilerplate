import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';

import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import { combineReducers, createStore } from 'redux';


import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

let store = createStore(
  rootReducer
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>

        <MoralisDappProvider>

          <App isServerInfo />
        </MoralisDappProvider>

    </MoralisProvider>

    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
   <Provider store={store}>

     <Application />
   </Provider>,

  // </React.StrictMode>,
  document.getElementById("root")
);
