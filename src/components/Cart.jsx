// src/components/Cart.jsx
import React from "react";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <h3>Total: ${total}</h3>}
    </div>
  );
}

export default Cart;