
// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import "../css/Cart.css"; // Asegúrate de tener los estilos aplicados correctamente

// const Cart = () => {
//   const { carrito, eliminarDelCarrito, vaciarCarrito, aumentarCantidad, disminuirCantidad } = useCart();

//   const precioTotal = carrito.reduce(
//     (total, producto) => total + producto.precio * producto.cantidad,
//     0
//   );

//   return (
//     <div className="cart-container">
//       <h2>Carrito de Compras</h2>

//       {carrito.length === 0 ? (
//         <div>
//           <p>Tu carrito está vacío.</p>
//           <Link to="/">Volver a la tienda</Link>
//         </div>
//       ) : (
//         <div>
//           <ul>
//             {carrito.map((producto) => (
//               <li key={producto.id} className="cart-item">
//                 <img src={producto.imagen} alt={producto.nombre} className="cart-image" />
//                 <p>{producto.nombre}</p>

//                 <div className="quantity-container">
//                   <button onClick={() => disminuirCantidad(producto.id)}>-</button>
//                   <span>{producto.cantidad}</span>
//                   <button onClick={() => aumentarCantidad(producto.id)}>+</button>
//                 </div>

//                 <p>Precio: ${producto.precio * producto.cantidad}</p>
//                 <button onClick={() => eliminarDelCarrito(producto.id)}>❌ Eliminar</button>
//               </li>
//             ))}
//           </ul>

//           <h3>Total: ${precioTotal}</h3>
//           <button onClick={vaciarCarrito} className="clear-cart">Vaciar Carrito</button>

//           <Link to="/checkout">
//             <button className="checkout-button">Ir al Checkout</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
/********************************** */

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import "../css/Cart.css";

// const Cart = () => {
//   const { carrito, eliminarDelCarrito, vaciarCarrito, aumentarCantidad, disminuirCantidad, mensaje } = useCart();

//   const precioTotal = carrito.reduce(
//     (total, producto) => total + producto.precio * producto.cantidad,
//     0
//   );

//   return (
//     <div className="cart-container">
//       <h2>Carrito de Compras</h2>

//       {/* Mensaje de stock */}
//       {mensaje && <p className="stock-message">{mensaje}</p>} 

//       {carrito.length === 0 ? (
//         <div>
//           <p>Tu carrito está vacío.</p>
//           {/* Link para volver a la tienda */}
//           <Link to="/">Volver a la tienda</Link>
//         </div>
//       ) : (
//         <div>
//           <ul>
//             {carrito.map((producto) => (
//               <li key={producto.id} className="cart-item">
//                 <img src={producto.imagen} alt={producto.nombre} className="cart-image" />
//                 <p>{producto.nombre}</p>

//                 <div className="quantity-container">
//                   <button onClick={() => disminuirCantidad(producto.id)}>-</button>
//                   <span>{producto.cantidad}</span>
//                   <button onClick={() => aumentarCantidad(producto.id)}>+</button>
//                 </div>

//                 <p>Precio: ${producto.precio * producto.cantidad}</p>
//                 <button onClick={() => eliminarDelCarrito(producto.id)}>❌ Eliminar</button>
//               </li>
//             ))}
//           </ul>

//           <h3>Total: ${precioTotal}</h3>
//           <button onClick={vaciarCarrito} className="clear-cart">Vaciar Carrito</button>

//           <Link to="/checkout">
//             <button className="checkout-button">Ir al Checkout</button>
//           </Link>
//         </div>
//       )}

//       {/* Enlace siempre visible para volver a la tienda */}
//       <Link to="/" className="back-to-store">
//         <button>Volver a la tienda</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;

/***************************** */
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css";

const Cart = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, aumentarCantidad, disminuirCantidad, mensaje } = useCart();

  const precioTotal = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {/* Mensaje de stock */}
      {mensaje && <p className="stock-message">{mensaje}</p>} 

      {carrito.length === 0 ? (
        <div>
          <p>Tu carrito está vacío.</p>
          {/* Solo mostrar "Volver a la tienda" cuando el carrito esté vacío */}
          <Link to="/" className="back-to-store">
            <button>Volver a la tienda</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id} className="cart-item">
                <img src={producto.imagen} alt={producto.nombre} className="cart-image" />
                <p>{producto.nombre}</p>

                <div className="quantity-container">
                  <button onClick={() => disminuirCantidad(producto.id)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => aumentarCantidad(producto.id)}>+</button>
                </div>

                <p>Precio: ${producto.precio * producto.cantidad}</p>
                <button onClick={() => eliminarDelCarrito(producto.id)} className="remove-item">❌ Eliminar</button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total: ${precioTotal}</h3>
          </div>
          <button onClick={vaciarCarrito} className="clear-cart">Vaciar Carrito</button>

          <Link to="/checkout">
            <button className="checkout-button">Ir al Checkout</button>
          </Link>
        </div>
      )}

      {/* Este enlace "Volver a la tienda" siempre debe estar fuera de las condiciones, solo aparecerá si no está en el bloque vacío */}
      {carrito.length !== 0 && (
        <Link to="/" className="back-to-store">
          <button>Volver a la tienda</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
