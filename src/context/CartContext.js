
import React, { createContext, useState, useContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState(""); 

 
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      
      if (productoExistente.cantidad < producto.stock) {
        setCarrito(
          carrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        );
        setMensaje(""); 
      } else {
        setMensaje("No hay más stock disponible.");
      }
    } else {
      if (producto.stock > 0) {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        setMensaje(""); 
      } else {
        setMensaje("No hay más stock disponible.");
      }
    }
  };

  
  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id === id) {
          if (producto.cantidad < producto.stock) {
            setMensaje(""); 
            return { ...producto, cantidad: producto.cantidad + 1 };
          } else {
            setMensaje("No hay más stock disponible.");
          }
        }
        return producto;
      })
    );
  };

  
  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
    setMensaje(""); 
  };

  
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    setMensaje(""); // Resetea el mensaje al eliminar un producto
  };

  
  const vaciarCarrito = () => {
    setCarrito([]);
    setMensaje(""); 
  };

  
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
        mensaje, 
        getTotalItems, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};
