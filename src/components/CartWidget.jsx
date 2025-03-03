import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { carrito } = useCart();

  const cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div>
      <h3>Carrito</h3>
      <p>
        <Link to="/cart">
          Ver carrito ({cantidadProductos > 0 ? cantidadProductos : "Vacío"})
        </Link>
      </p>
    </div>
  );
};

export default CartWidget;
