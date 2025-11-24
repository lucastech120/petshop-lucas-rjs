import { Link, useParams } from "react-router-dom";
import "./BreadCrumbs.css"

const BreadCrumbs = () => {
  const { categoria, subcategoria, id, nombre} = useParams();

  return (
    <nav className="breadcrumb">
      <Link to="/">Inicio</Link>

      {categoria && (
        <>
          {" / "}
          <Link to={`/${categoria}`}>{categoria}</Link>
        </>
      )}

      {subcategoria && (
        <>
          {" / "}
          <Link to={`/${categoria}/${subcategoria}`}>{subcategoria}</Link>
        </>
      )}

      {id && (
        <>
          {" / "}
          <span>{nombre}</span>
        </>
      )}
    </nav>
  );
};

export default BreadCrumbs;