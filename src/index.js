import React from "react";
import "./styles/_reset.scss";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
  
      <App />
   
    </BrowserRouter>
  // </React.StrictMode>
);
