import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss"

ReactDOM.render(
   <AppRouter />, document.getElementById("root")
);

