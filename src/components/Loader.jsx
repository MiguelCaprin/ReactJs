import { useEffect } from "react";
import "../css/Loader.css"; // Archivo CSS para la animación

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Llamamos a la función para ocultar el loader
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Cleanup en caso de desmontaje
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src="/reactlogo.png" alt="Logo de Old School Classics" className="logo-animation" />
    </div>
  );
};

export default Loader;
