import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {



  return (


    <header>
      
        <h1>Petshop Lucas</h1>

        <nav>
            <ul>
                <Link to='/'>Inicio</Link>
                
                <Link to='/contacto'>Contacto</Link>

            </ul>
        </nav>


        <CartWidget/>
        
    </header>


  )
}

export default NavBar