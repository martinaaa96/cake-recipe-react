import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as cakeService from './services/cakeService'
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog/Catalog';
import CreateProduct from './components/CreateProduct';
import Header from './components/Header';
import './App.css'
function App() {
  
  const [cakes, setCake] = useState([]);

  useEffect(()=>{
    cakeService.getAll()
    .then(result =>{
     setCake(result)
    })
  },[]);
  
  
  
  return (
    <>
   
<Header/>
      
      <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/catalog' element={<Catalog cakes={cakes}/>} />
      <Route path='/create' element={ <CreateProduct/>} />
      </Routes>

      
    

</main>

      <Footer />
      

    </>
  );
}

export default App;
