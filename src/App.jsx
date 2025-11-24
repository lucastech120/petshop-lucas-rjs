import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetails from './components/ItemDetails/ItemDetails'
import Contacto from './components/Contacto/Contacto'



const App = () => {

   // (Hacer siempre return de 1 solo componente padre, siempre un BrowseRouter con todo el resto de la estructura dentro)


  return (

   <BrowserRouter>
    
    <NavBar>


    </NavBar>

    <Routes>
      <Route 
      path='/'
      element = {<ItemListContainer/>}

      /> 
      <Route
      path='/itemdetails/:id'
      element = {<ItemDetails/>}
      
      />
      <Route
      path='/contacto'
      element = {<Contacto/>}
      
      />
      <Route
      path='/:categoria'
      element = {<ItemListContainer/>}


      />
      <Route
      path='/:categoria/:subcategoria'
      element = {<ItemListContainer/>}
      />
      <Route/>


    </Routes>
   </BrowserRouter>


  )
}
export default App