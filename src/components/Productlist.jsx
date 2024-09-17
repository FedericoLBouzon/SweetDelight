import React from "react";
import "../app.css"; 
import chipa from "../assets/chipa.jpg";
import bizcochitos from "../assets/bizcochitos de grasa.jpg";
import croissant from "../assets/croissant.jpg";
import medialuna from "../assets/medialuna.jpg";
import scones from "../assets/scones de queso.png";

const products = [
  {
    name: "Croissants",
    description: "Crujientes por fuera, suaves por dentro: Una combinación perfecta de texturas que deleitará tu paladar. Sabor auténtico: Elaborados con una receta tradicional que garantiza un sabor inigualable. Versátiles: Ideales para el desayuno, merienda o como acompañamiento de platos salados",
    price: 450,
    imageUrl: croissant,
  },
  {
    name: "Medialunas",
    description: "La tentación argentina: Un clásico que nunca falla, con un sabor dulce y delicado. Masa suave y esponjosa: Preparadas con ingredientes de primera calidad para una textura irresistible. Perfecta para cualquier ocasión: Ya sea para disfrutar solo o compartir en familia.",
    price: 400,
    imageUrl: medialuna,
  },
  {
    name: "Scones de queso",
    description: "Sabor salado y adictivo: La combinación perfecta de queso y hierbas aromáticas. Textura desmenuzable: Ideales para acompañar el té o café de la tarde. Un toque gourmet: Eleva tus desayunos y meriendas con este delicioso snack.",
    price: 500,
    imageUrl: scones,
  },
  {
    name: "Chipa",
    description: "La delicia paraguaya: Un bocado crujiente y sabroso, con un toque de queso.Tradición y sabor: Elaborados de forma artesanal, preservando la receta original. Perfectos para compartir: Ideales para reuniones y eventos especiales.",
    price: 350,
    imageUrl: chipa,
  },
  {
    name: "Bizcochitos de grasa",
    description: "El clásico argentino: Un dulce tradicional con un sabor inconfundible.Suaves y esponjosos: Preparados con una masa rica en grasa, lo que les otorga una textura única. Perfectos para cualquier ocasión: Ideales para acompañar el mate o como postre.",
    price: 300,
    imageUrl: bizcochitos,
  },
];

export default function ProductList({ addToCart }) {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span>${product.price}</span>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                🛒 Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
