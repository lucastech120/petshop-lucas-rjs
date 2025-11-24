import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import Item from "../Item/Item"
import productosJSON from "../../../productos.json"
import  "./ItemListContainer.css"
import Aside from '../Aside/Aside'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";





const ItemListContainer = () => {
  const { categoria, subcategoria } = useParams();
  const [productos, setProductos] = useState([])

 useEffect(() => {
    fetch("/productos.json")
      .then(res => res.json())
      .then(data => {

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
      
    <Aside/>
    <div> 
    <BreadCrumbs/>
    
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
        <p>Cargando productos...</p>
      )}
    </div>

      </div>
    </div>

  )
}

export default ItemListContainer