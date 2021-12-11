import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "fontawesome-4.7/css/font-awesome.css";
import "./index.css";
import FormSteps from "./components/FormSteps";
import Header from '../src/common/Header';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <FormSteps />
  </React.StrictMode>,
  document.getElementById("root")
);
