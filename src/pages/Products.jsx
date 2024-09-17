import React, { useState } from "react";
import ProductList from "../components/Productlist";

export default function ProductsPage({ addToCart }) {
  const [message, setMessage] = useState("");

  return (
    <div className="catalogo-container">
      <h1>Catálogo</h1>
      {message && <div className="alert">{message}</div>}
      <ProductList addToCart={addToCart} />
    </div>
  );
}
