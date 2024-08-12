import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./Cart.css";

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      <CartSummary cartItems={cartItems} />
    </div>
  );
};

export default Cart;
