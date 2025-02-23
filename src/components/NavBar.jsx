import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/NavBar.css";

const NavBar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>Old School Classics</h1>
        <Link to="/cart" className="cart-link">
          <img src="/carrito.png" alt="Carrito" className="cart-icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;







