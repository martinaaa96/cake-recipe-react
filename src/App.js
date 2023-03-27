
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog';
import CreateProduct from './components/CreateProduct';
import Details from './components/Details';
import Edit from './components/Edit';
import Header from './components/Header';
function App() {
  return (
    <>
     <div id="box">
<Header/>
      
      <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/catalog' element={<Catalog/>} />
      <Route path='/create' element={ <CreateProduct/>} />
      </Routes>

      
    

</main>

      <Footer />
      </div>

    </>
  );
}

export default App;
