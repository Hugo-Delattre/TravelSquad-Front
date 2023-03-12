import React from "react";
import "./styles/_reset.scss";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./_helpers/ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
