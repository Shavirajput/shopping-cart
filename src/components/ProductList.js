import React from "react";
import ProductItem from "./ProductItem";
import products from "../data/products";
import "./ProductList.css";

const ProductList = ({ addToCart, removeFromCart, cartItems }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
