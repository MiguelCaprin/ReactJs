import React from 'react';
import '../css/Footer.css';

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
          <a href="https://facebook.com" target='blank' className="social-icon">
            <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" className="social-icon-img" />
          </a>
          <a href="https://twitter.com" target='blank' className="social-icon">
            <img src={`${process.env.PUBLIC_URL}/twiter.png`} alt="Twitter" className="social-icon-img" />
          </a>
          <a href="https://instagram.com" target='blank' className="social-icon">
            <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" className="social-icon-img" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

