import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// setup fake backend
import { configureFakeBackend, store } from "./helpers";
import { App } from "./components/App";
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);