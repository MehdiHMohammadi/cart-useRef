import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./assets/context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
