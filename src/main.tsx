import React from "react";
import ReactDOM from "react-dom/client";

// third party
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// project imports
import App from "./App";
import { store } from "./store";

// style + assets
import "assets/scss/style.scss";
import config from "./config";

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
