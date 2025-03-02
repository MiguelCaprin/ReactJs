

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/NavBar.css";

const NavBar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>Old School Classics</h1>

        {/* Dropdown de categorías */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Categorías ▼
          </button>
          <ul className={`dropdown-content ${dropdownVisible ? "show" : ""}`}>
            <li>
              <Link to="/" onClick={() => setDropdownVisible(false)}>Todos</Link>
            </li>
            <li>
              <Link to="/categoria/Ford" onClick={() => setDropdownVisible(false)}>Ford</Link>
            </li>
            <li>
              <Link to="/categoria/Chevrolet" onClick={() => setDropdownVisible(false)}>Chevrolet</Link>
            </li>
            <li>
              <Link to="/categoria/Dodge" onClick={() => setDropdownVisible(false)}>Dodge</Link>
            </li>
          </ul>
        </div>

        {/* Carrito */}
        <Link to="/cart" className="cart-link">
  <img src="/carrito.png" alt="Carrito" className="cart-icon" />
  {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
</Link>

      </div>
    </nav>
  );
};

export default NavBar;












