
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar"> { }
      <div className="nav-container">
        <a className="brand-link" href="#">
          <img
            src="\public\logo.png"
            alt="Arroyo Blanco"
            width="120"

            className="brand-logo"
          />
          <span className="brand-name">Arroyo Blanco</span>
        </a>

        <ul className="nav-list">
          <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Vermut</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Accesorios</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;