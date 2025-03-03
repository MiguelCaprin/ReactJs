import { useEffect } from "react";
import "../css/Loader.css";
import reactLogo from "../images/classics.webp";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src={reactLogo} alt="Logo de Old School Classics" className="logo-animation" />
    </div>
  );
};

export default Loader;

