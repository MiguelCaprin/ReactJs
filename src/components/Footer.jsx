import React from 'react';
import '../css/Footer.css';
import facebookImg from '../images/facebook.png';  // Importa la imagen de Facebook
import twitterImg from '../images/twitter.png';    // Importa la imagen de Twitter
import instagramImg from '../images/instagram.png'; // Importa la imagen de Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Old School Classics. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">Sobre Nosotros</a>
          <a href="/contact" className="footer-link">Contacto</a>
          <a href="/terms" className="footer-link">Términos de Servicio</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" className="social-icon">
            <img src={facebookImg} alt="Facebook" className="social-icon-img" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" className="social-icon">
            <img src={twitterImg} alt="Twitter" className="social-icon-img" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" className="social-icon">
            <img src={instagramImg} alt="Instagram" className="social-icon-img" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
