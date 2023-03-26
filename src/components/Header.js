import { Link } from "react-router-dom";


export default function Header(){
    
    return (
      <header>
      <nav>
        <div className="logo">
          <img src="images/main-logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home </Link></li>
          <li><Link to="/catalog">Catalog </Link></li>
          <li><Link to="/create">Create Cake </Link></li>
          <li><Link to="/login">Login </Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
    )
}