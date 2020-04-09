import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ProductTable from "./component/ProductTable";
import "bootstrap/dist/css/bootstrap.min.css";
const data = [
  {
    category: "Electronics",
    price: "300",
    name: "phone",
  },
  {
    category: "Electronics",
    price: "200",
    name: "tab",
  },
  {
    category: "Clothes",
    price: "150",
    name: "veste",
  },
  {
    category: "Clothes",
    price: "50",
    name: "pull",
  },
];
ReactDOM.render(
  <React.StrictMode>
    <ProductTable product={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
