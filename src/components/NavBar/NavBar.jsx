import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logo = "https://lucastech120.github.io/petshop-lucas/img/petshop-logo.png";

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo Petshop Lucas" />
        <h1>Petshop Lucas</h1>
      </div>

      {/* Menú */}
      <nav className="navbar-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {/* Carrito */}
      <div className="navbar-cart">
        <CartWidget />
      </div>

    </header>
  );
};

export default NavBar;
