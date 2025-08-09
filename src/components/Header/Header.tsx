const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <svg className="me-2" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            </svg>
            Mi App
          </a>
          
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
       
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;