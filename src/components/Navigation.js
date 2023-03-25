export default function Navigation() {

    return (

        <nav className="navbar">

            <div className="navbar-brand">

                <img src="images/main-logo.png" alt="" />

            </div>
            <div className="navbar-collapse collapse " id="form-control mr-sm-2 nav ">
                <ul className="navbar-nav list-inline">
                    <li className="nav-item text-hover"><a href="/" className="nav-link" data-effect="Home">Home</a></li>
                    <li className="nav-item text-hover"><a href="/products" className="nav-link" data-effect="Products">Products</a></li>
                    <li className="nav-item text-hover"><a href="/createProducts" className="nav-link" data-effect="Create product">Create product</a></li>
                    <li className="nav-item text-hover"><a href="/login" className="nav-link" data-effect="Login">Login</a></li>
                    <li className="nav-item text-hover"><a href="/register" className="nav-link" data-effect="Register">Register</a></li>
                    <li className="nav-item text-hover"><a href="/logout" className="nav-link" data-effect="Logout">Logout</a></li>
                </ul>
            </div>


        </nav>

    )
}