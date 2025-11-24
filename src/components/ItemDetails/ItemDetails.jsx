import { useParams } from "react-router-dom";
import productos from "../ItemListContainer/productos.json";
import "./ItemDetails.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const ItemDetails = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === id);

  return (
    <div className="item-page">

      <BreadCrumbs />

      {producto ? (
        <div className="item-card">

          {/* Imagen grande */}
          <div className="item-image-container">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>

          {/* Información */}
          <div className="item-info">
            <h2>{producto.nombre}</h2>
            <h3 className="item-price">${producto.precio}</h3>

            {/* Características opcionales */}
            <div className="item-attributes">

            </div>

            {/* Cantidad */}
            <div className="item-quantity">
              <span>Cantidad:</span>
              <input type="number" defaultValue={1} min={1} />
            </div>

            {/* Botón */}
            <button className="add-cart-btn">
              Agregar al carrito 🛒
            </button>

            <p className="item-small-text">
              Compra protegida: tus datos cuidados durante toda la compra.
            </p>
            <p className="item-small-text">
              Cambios: si hay algún problema con tu pedido, podés solicitar cambio.
            </p>
          </div>

        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetails;
