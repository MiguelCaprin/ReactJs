import { useEffect } from "react";
import "../css/Loader.css"; 

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onFinish]);

  return (
    <div className="loader-container">
    <img src={`${process.env.PUBLIC_URL}/reactlogo.png`} alt="Logo de Old School Classics" className="logo-animation" />
  </div>
  
  );
};

export default Loader;
