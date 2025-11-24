import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Item.css";

const Item = ({id, nombre, imagen, precio}) => {
  return (
    <div className="item-card-container">

      <Card className="item-card">
        <Card.Img variant="top" src={imagen} className="item-card-img" />

        <Card.Body>
          <Card.Title className="item-card-title">{nombre}</Card.Title>

          <Card.Text className="item-card-price">
            ${precio}
          </Card.Text>

          <Button className="btn-primary-custom">
            Agregar al carrito
          </Button>

          <Link to={`/itemdetails/${id}`}>
            <Button className="btn-secondary-custom mt-2">
              Ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Item;
