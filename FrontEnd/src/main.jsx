import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { CartProvider } from "./Components/CartContext/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)