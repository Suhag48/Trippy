import { Link } from "react-router-dom"

import "./NavbarStyle.css"
import { MenuItems } from "./MenuItems"
import { useState } from "react"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const [islogin, setIslogin] =  useState(false)
  const hancleLogin = () => setIslogin(!islogin)

  return (
    <nav className="nav-items">
      <Link to="/">
        <h1 className="nav-logo">Trippy</h1>
      </Link>

      <div className="menu-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          const {title, url, cName, icon} = item
          return(
            <li key={index}>
              <Link to={url} className={cName}>
                <i className={icon}></i> {title}
              </Link>
            </li>
          )
        })}
        <button>
          {
            islogin ? <Link to="" onClick={hancleLogin}>Logout</Link> : <Link to="/login">Login</Link>
          }
        </button>
      </ul>
    </nav>
  )
}

export default Navbar