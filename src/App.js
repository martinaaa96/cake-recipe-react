

import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog';
import CreateProduct from './components/CreateProduct';
import Details from './components/Details';
import Edit from './components/Edit';
function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="images/main-logo.png" alt="logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Create Cake</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <Home/>
      <Login/>
      <Register/>
      <Catalog/>
      <CreateProduct/>
      <Details/>
      <Edit/>

      
    

</main>
      <Footer />

    </>
  );
}

export default App;
