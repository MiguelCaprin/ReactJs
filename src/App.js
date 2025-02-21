//  import { CartProvider } from "./context/CartContext";
//  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//  import CartWidget from "./components/CartWidget";
//  import ItemListContainer from "./components/ItemListContainer";
//  import Cart from "./components/Cart"; 
//  import Checkout from "./components/Checkout"; // ✅ Importa Checkout

//  function App() {
//    return (
//      <CartProvider>
//        <Router>
//          <div>
//            <h1>¡Bienvenido a mi E-commerce!</h1>
//            <CartWidget />
//            <Routes>
//              <Route path="/" element={<ItemListContainer />} />
//              <Route path="/cart" element={<Cart />} />
//              <Route path="/checkout" element={<Checkout />} /> {/* ✅ Agrega esta ruta */}
//            </Routes>
//          </div>
//        </Router>
//     </CartProvider> );
//  }

//  export default App;

 /*import { useState } from "react";
 import { CartProvider } from "./context/CartContext";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import CartWidget from "./components/CartWidget";
 import ItemListContainer from "./components/ItemListContainer";
 import Cart from "./components/Cart"; 
 import Checkout from "./components/Checkout";
 import Loader from "./components/Loader"; // Importamos el Loader
 import logo from "./public/reactlogo.png";
 
 function App() {
   const [loading, setLoading] = useState(true);
 
   return (
     <CartProvider>
       <Router>
         {loading ? (
           <Loader onFinish={() => setLoading(false)} />
         ) : (
           <div>
             <h1>¡Bienvenido a mi E-commerce!</h1>
             <CartWidget />
             <Routes>
               <Route path="/" element={<ItemListContainer />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/checkout" element={<Checkout />} />
             </Routes>
           </div>
         )}
       </Router>
     </CartProvider>
   );
 }
 
 export default App;*/
 import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout";
import Loader from "./components/Loader"; // Importamos el Loader
import './css/App.css';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      <Router>
        {loading ? (
          <Loader onFinish={() => setLoading(false)} />
        ) : (
          <div>
 
            <h1>¡Bienvenido a mi E-commerce!</h1>
            <CartWidget />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
