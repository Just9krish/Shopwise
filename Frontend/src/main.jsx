import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductContextProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
