import React from 'react'
import Boton from './components/Boton/Boton'
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'
  // import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'

const App = () => {
  // Se puede escribir lógica JS fuera del return, para luego utilizarla dentro del mismo
  function saludo(){
    console.log("Hola mundo")
  }

  saludo() 

  let cantidad = 1

  let colorFondo = {backgroundColor: "green"}

  const celular = {
    marca: "Samsung",
    precio: 500000
  }

   // (Hacer siempre return de 1 solo componente padre, siempre un div y/o section con todo el resto de la estructura dentro)
   // <TituloPrincipal saludo="Esto es una props" producto={celular}> </TituloPrincipal>
  return (

   <div>
    
    <NavBar></NavBar>

    <ItemListContainer></ItemListContainer>

   </div>

  )
}
export default App