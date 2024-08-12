import React from "react";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <h1>My Shopping Site</h1>
      <div className="cart-icon">
        <span role="img" aria-label="cart">🛒</span>
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </header>
  );
};

export default Header;
