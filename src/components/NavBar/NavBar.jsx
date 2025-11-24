import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {



  return (


    <header>
      
        <h1>Petshop Lucas</h1>

        <nav>
            <ul>
                <li>Perro</li>
                <li>Gato</li>
                <li>Item 1</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>


  )
}

export default NavBar