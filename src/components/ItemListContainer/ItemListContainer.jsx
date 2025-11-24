import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';

import "./ItemListContainer.css"
import Item from "../Item/Item"
import Aside from '../Aside/Aside'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const ItemListContainer = () => {
  const { categoria, subcategoria } = useParams();
  const [productos, setProductos] = useState([])

  useEffect(() => {

    const cargarProductos = new Promise((resolve) => {
      setTimeout(() => {
        fetch("/productos.json")
          .then(res => res.json())
          .then(data => resolve(data));
      }, 1500); 
    });

    cargarProductos.then(data => {
      let filtrados = data;

      if (categoria) {
        filtrados = filtrados.filter(p => p.categoria === categoria);
      }

      if (subcategoria) {
        filtrados = filtrados.filter(p => p.subcategoria === subcategoria);
      }

      setProductos(filtrados);
    });

  }, [categoria, subcategoria]);


  return (

    <div className='contenedor'>

      <Aside />
      <div className="w-100">
        <BreadCrumbs />
        <div className='productos'>
          {productos.length > 0 ? (
            productos.map((prod) => (
              <Item
                key={prod.id}
                id={prod.id}
                nombre={prod.nombre}
                imagen={prod.imagen}
                categoria={prod.categoria}
                subcategoria={prod.subcategoria}
                precio={prod.precio}
              />
            ))
          ) : (
            <div className="spinner">

              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
              <span>Cargando productos...</span>
            </div>
          )}
        </div>

      </div>
    </div>

  )
}

export default ItemListContainer