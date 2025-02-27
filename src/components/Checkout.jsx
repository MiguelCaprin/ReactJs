import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Checkout.css";

const Checkout = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const precioTotal = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !email || !direccion) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }
    setMensaje("Compra exitosa. ¡Gracias por tu compra!");
    vaciarCarrito(); 
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", backgroundColor: "black", borderRadius: "50px" }}>
      <h2>Resumen de Compra</h2>

      {/* Mensaje de estado */}
      {mensaje && <p style={{ color: "violet", fontWeight: "bold" }}>{mensaje}</p>}

      {carrito.length === 0 ? (
        <div>
          <p>No hay productos en tu carrito.</p>
          <Link to="/">Volver a la tienda</Link>
        </div>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {carrito.map((producto) => (
              <li key={producto.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <p>{producto.nombre} x {producto.cantidad}</p>
                <p>${producto.precio * producto.cantidad}</p>
                <button
                  onClick={() => eliminarDelCarrito(producto.id)}
                  style={{ padding: "5px", backgroundColor: "lightblue", color: "white", border: "none", cursor: "pointer" }}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${precioTotal}</h3>

          <button onClick={vaciarCarrito} style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer", marginRight: "10px" }}>
            Vaciar Carrito
          </button>

          {/* Formulario de Checkout */}
          <form onSubmit={manejarEnvio} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
            />

            <label htmlFor="email">Email donde enviaremos el comprobante de pago</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
            />

            <label htmlFor="direccion">Dirección donde enviaremos el comprobante de pago</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              style={{ padding: "8px", width: "80%", marginBottom: "20px" }}
            />

            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "black", color: "gold", border: "none", cursor: "pointer" }}>
              Confirmar Compra
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
