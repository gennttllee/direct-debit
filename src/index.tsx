import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./pages/Products";
import Modal from "./components/modal";
import Business from "./pages/Business";
import Alerts from "./components/alerts";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Alerts>
        <Modal>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/products" element={<Products />} />
              <Route path="/business" element={<Business />} />
            </Routes>
          </BrowserRouter>
        </Modal>
      </Alerts>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
