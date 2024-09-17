import React, { useState } from "react";

export default function Cart({ cart, removeFromCart, clearCart, updateQuantity }) {
  const [productToRemove, setProductToRemove] = useState(null); // Para saber qué producto se quiere eliminar
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Para controlar la visualización del modal

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleRemove = (product) => {
    setProductToRemove(product);
    setShowConfirmModal(true); // Mostrar el modal de confirmación
  };

  const confirmRemove = () => {
    removeFromCart(productToRemove); // Eliminar el producto
    setShowConfirmModal(false); // Cerrar el modal
  };

  // Función para manejar el aumento de la cantidad
  const handleIncreaseQuantity = (product) => {
    updateQuantity(product, product.quantity + 1);
  };

  // Función para manejar la disminución de la cantidad
  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img src={product.imageUrl} alt={product.name} className="cart-image" />
                <div className="cart-info">
                  <h3>{product.name}</h3>
                  <p>${product.price} x {product.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleIncreaseQuantity(product)}>+</button>
                    <button 
                      onClick={() => handleDecreaseQuantity(product)} 
                      disabled={product.quantity <= 1} // Deshabilitar botón si la cantidad es 1
                    >
                      -
                    </button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(product)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button className="clear-cart-btn" onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}

      {/* Modal de confirmación */}
      {showConfirmModal && (
        <div className="modal">
          <div className="modal-content">
            <p>¿Estás seguro de que deseas eliminar {productToRemove?.name} del carrito?</p>
            <button onClick={confirmRemove}>Aceptar</button>
            <button onClick={() => setShowConfirmModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
