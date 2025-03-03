
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import Item from "./Item";
import "../css/ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        let q;
        const productosRef = collection(db, "productos");

        if (categoria) {

          q = query(productosRef, where("categoría", "==", categoria));
        } else {

          q = productosRef;
        }

        const querySnapshot = await getDocs(q);
        const productosFirebase = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFirebase);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <div className="container">
      <h2>Catálogo Old School</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid">
          {productos.length > 0 ? (
            productos.map((producto) => <Item key={producto.id} producto={producto} />)
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;







