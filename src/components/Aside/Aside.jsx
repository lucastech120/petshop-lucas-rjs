import { NavLink } from "react-router-dom";
import "./Aside.css"

const Aside = () => {
  return (
    <aside className="aside p-3 text-white">




      {/* Título */}
      <h3 className="mb-4">Categorías</h3>

      <ul className="nav flex-column">

        {/* Ver todo */}
        <li className="nav-item mb-3">
          <NavLink className="nav-link text-white" to="/">
            Productos
          </NavLink>
        </li>

        {/* Perros */}
        <li className="nav-item dropdown-hover mb-3">

          {/* Enlace principal clickeable */}
          <NavLink className="nav-link text-white" to="/perros">
            Perros
          </NavLink>

          {/* Subcategorías */}
          <ul className="dropdown-menu show-on-hover">
            <li><NavLink className="dropdown-item" to="/perros/alimentos">Alimentos</NavLink></li>
            <li><NavLink className="dropdown-item" to="/perros/salud">Salud</NavLink></li>
            <li><NavLink className="dropdown-item" to="/perros/camas">Camas</NavLink></li>
            <li><NavLink className="dropdown-item" to="/perros/accesorios">Accesorios</NavLink></li>
          </ul>
        </li>

        {/* Gatos */}
        <li className="nav-item dropdown-hover">

          <NavLink className="nav-link text-white" to="/gatos">
            Gatos
          </NavLink>

          <ul className="dropdown-menu show-on-hover">
            <li><NavLink className="dropdown-item" to="/gatos/alimentos">Alimentos</NavLink></li>
            <li><NavLink className="dropdown-item" to="/gatos/salud">Salud</NavLink></li>
            <li><NavLink className="dropdown-item" to="/gatos/camas">Camas</NavLink></li>
            <li><NavLink className="dropdown-item" to="/gatos/accesorios">Accesorios</NavLink></li>
          </ul>

        </li>
      </ul>
    </aside>
  );
};

export default Aside;
