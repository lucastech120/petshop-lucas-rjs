import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({id, nombre, imagen, precio}) => {

  return (


    <div>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        {precio}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
        <Link to={`/itemdetails/${id}`}>
            <Button variant="secondary" className="mt-2">
              Ver detalle
            </Button>
          </Link>
      </Card.Body>
    </Card>


    </div>
  )
}

export default Item