import { Link, useParams } from "react-router-dom";

const BreadCrumbs = () => {
  const { categoria, subcategoria, id } = useParams();

  return (
    <nav className="breadcrumb">
      <Link to="/">Productos</Link>

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
          <span>{id}</span>
        </>
      )}
    </nav>
  );
};

export default BreadCrumbs;