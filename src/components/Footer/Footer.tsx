import React from 'react';

interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ className = '', style = {} }) => {
  return (
    <footer 
      className={`text-white py-4 mt-auto ${className}`}
      style={{
        background: "rgba(15, 32, 39, 0.7)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        ...style
      }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-3 mb-md-0">
            © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white hover-effect">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white hover-effect">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white hover-effect">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;