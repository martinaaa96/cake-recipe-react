import { Link } from "react-router-dom";


export default function Header() {

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="images/main-logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home </Link>
            <Link to="/catalog">Catalog </Link>
            <Link to="/create">Create Cake </Link>
            <Link to="/login">Login </Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}