import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>
        Quantity:{" "}
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
