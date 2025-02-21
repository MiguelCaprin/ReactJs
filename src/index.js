import React from "react";
import ReactDOM from "react-dom/client"; // Importa 'react-dom/client'
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Importa el CartProvider

const root = ReactDOM.createRoot(document.getElementById("root")); // Usamos createRoot
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);