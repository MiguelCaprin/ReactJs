
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Aquí mantenemos BrowserRouter
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";  // Importa el NavBar
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout";
import Loader from "./components/Loader"; // Importamos el Loader
import Footer from './components/Footer';  // Importa el Footer
import './css/App.css';
import { useCart } from "./context/CartContext";  // Usamos el hook del carrito

function App() {
  const [loading, setLoading] = useState(true);
  const { carrito } = useCart();  // Obtenemos el carrito desde el contexto

  return (
    <CartProvider>
      <Router>
        {loading ? (
          <Loader onFinish={() => setLoading(false)} />
        ) : (
          <div>
            <NavBar carrito={carrito} /> {/* Incluimos el NavBar */}
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} /> {/* Ruta de categoría */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />  {/* Agregamos el Footer aquí */}
          </div>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
