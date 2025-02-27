import React from "react";
import { useCart } from "../context/CartContext"; 
import "../css/Item.css";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useCart(); 

  const agregarProducto = () => {
    agregarAlCarrito(producto); 
  };

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} className="image" />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <button onClick={agregarProducto} className="button">Agregar al carrito</button>
    </div>
  );
};

export default Item;