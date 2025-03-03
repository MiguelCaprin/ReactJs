import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../css/Item.css";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abrir modal
  const openModal = (e) => {
    if (!e.target.classList.contains("button")) {
      setIsModalOpen(true);
    }
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Agregar producto al carrito
  const agregarProducto = (e) => {
    e.stopPropagation();
    agregarAlCarrito(producto);
  };

  // Deshabilitar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll
    } else {
      document.body.style.overflow = "auto"; // Habilitar el scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Restaurar al cerrar el componente
    };
  }, [isModalOpen]);

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
