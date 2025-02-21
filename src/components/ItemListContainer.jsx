import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // Asegúrate de que esta ruta sea correcta
import Item from "./Item";
import "../css/ItemListContainer.css";  // Importa el archivo CSS

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productosFirebase = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Asegúrate de agregar el id del documento
          ...doc.data(),
        }));
        setProductos(productosFirebase);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      }
    };

    obtenerProductos();
  }, []); // Este useEffect se ejecuta una sola vez cuando el componente se monta

  return (
    <div className="container"> {/* Usar la clase de CSS */}
      <h2>Lista de Productos</h2>
      <div className="grid"> {/* Usar la clase de CSS */}
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
