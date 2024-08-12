import React from "react";
import "./CartSummary.css";

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 500 ? 50 : 0; // Example discount logic
  const total = subtotal - discount;

  return (
    <div className="cart-summary">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount: -${discount.toFixed(2)}</p>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartSummary;
