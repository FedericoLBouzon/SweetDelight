import React from "react";
import cartIcon from "../assets/logo.jpeg"; // Asegúrate de tener un ícono de carrito.

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="cart-icon">
        <img src={cartIcon} alt="cart" />
      </div>
    </div>
  );
};

export default ProductCard;



