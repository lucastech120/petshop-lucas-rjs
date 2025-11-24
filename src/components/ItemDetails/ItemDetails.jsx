import { useParams } from "react-router-dom";
import productos from "../../../productos.json";

const ItemDetails = () => {
  const { id } = useParams();
  
  const producto = productos.find((p) => p.id === id);

  return (
    <div>
      {producto ? (
        <>
          <h2>{producto.nombre}</h2>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>Precio: ${producto.precio}</p>
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetails;
