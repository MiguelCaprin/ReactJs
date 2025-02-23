
import React, { createContext, useState, useContext } from "react";

// Crea el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje de stock

  // Agregar un producto al carrito con control de stock
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      // Verifica que no supere el stock disponible
      if (productoExistente.cantidad < producto.stock) {
        setCarrito(
          carrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        );
        setMensaje(""); // Resetea el mensaje si el usuario aún puede agregar
      } else {
        setMensaje("No hay más stock disponible.");
      }
    } else {
      if (producto.stock > 0) {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        setMensaje(""); // Resetea el mensaje
      } else {
        setMensaje("No hay más stock disponible.");
      }
    }
  };

  // Aumentar la cantidad de un producto (sin superar el stock)
  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id === id) {
          if (producto.cantidad < producto.stock) {
            setMensaje(""); // Resetea el mensaje si aún hay stock
            return { ...producto, cantidad: producto.cantidad + 1 };
          } else {
            setMensaje("No hay más stock disponible.");
          }
        }
        return producto;
      })
    );
  };

  // Disminuir la cantidad de un producto (sin permitir que baje de 1)
  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
    setMensaje(""); // Resetea el mensaje al disminuir cantidad
  };

  // Eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    setMensaje(""); // Resetea el mensaje al eliminar un producto
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setMensaje(""); // Resetea el mensaje al vaciar el carrito
  };

  // Método para obtener la cantidad total de productos en el carrito
  const getTotalItems = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        mensaje, // Exportamos el mensaje para usarlo en el carrito
        getTotalItems, // Exportamos la función para obtener el total de items
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
