import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product, addToCart, removeFromCart, cartItems }) => {
  // Check if the product is in the cart
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
