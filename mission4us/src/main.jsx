import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store, { persistor } from "./Redux/store";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>

    </Provider>


  </React.StrictMode>,
  // document.getElementById("root")
);
