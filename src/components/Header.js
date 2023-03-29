import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

export default function Header() {

  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="images/main-logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
       
          <li>
            <span className="colored">{userEmail}</span>
            <Link to="/">Home </Link>
            <Link to="/catalog">Catalog </Link>
          
            {isAuthenticated && (
              <span>
           
                <Link to="/create">Create Cake </Link>
                <Link to="/logout">Logout </Link>
              </span>
            )}
            {!isAuthenticated && (
              <span>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </span>
            )}
       </li>
        </ul>
      </nav>
    </header>
  )
}