

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../css/Item.css";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    if (!e.target.classList.contains("button")) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const agregarProducto = (e) => {
    e.stopPropagation();
    agregarAlCarrito(producto);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img src={producto.imagen} alt={producto.nombre} className="image" />
        <h3>{producto.nombre}</h3>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <button onClick={agregarProducto} className="button">Agregar al carrito</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>✖</button>
            <img src={producto.imagen} alt={producto.nombre} className="modal-image" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripción}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;

