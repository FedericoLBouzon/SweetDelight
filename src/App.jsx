import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Products from "./pages/Products";
import NavBar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(""); // Nuevo estado para notificaciones

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.name === product.name 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Mostrar notificación
    setNotification(`${product.name} ha sido añadido al carrito`);
    setTimeout(() => {
      setNotification(""); // Limpiar notificación después de 3 segundos
    }, 1000);
  };

  // Función para eliminar un producto del carrito completamente
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.name !== product.name));
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (product, newQuantity) => {
    setCart(cart.map(item => 
      item.name === product.name 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <NavBar />
      {notification && <div className="notification">{notification}</div>} {/* Mostrar notificación */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} updateQuantity={updateQuantity} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
