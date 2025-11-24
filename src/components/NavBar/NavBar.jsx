import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {

  const logo = "https://lucastech120.github.io/petshop-lucas/img/petshop-logo.png"

  return (


    <header>

        <div className="logoandname">   
          <img className="logo" src={logo} alt="Logo Petshop Lucas" />
          <h1>Petshop Lucas</h1>
        </div>

        <nav>
            <ul>
                <Link to='/'>Inicio</Link>
                
                <Link to='/contacto'>Contacto</Link>

            </ul>
        </nav>


        <CartWidget className="widget-cart"/>
        
    </header>


  )
}

export default NavBar