import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { cakeServiceFactory } from './services/cakeService';
import { AuthProvider } from './contexts/AuthContext';

import { useService } from './hooks/useService';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Header from './components/Header/Header';

import './App.css'
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';

function App() {
  const navigate = useNavigate();

  const [cakes, setCake] = useState([]);
  const cakeService = cakeServiceFactory();


  useEffect(() => {
    cakeService.getAll()
      .then(result => {
        setCake(result)
      })
  }, []);

  const onCakeCreateSubmit = async (data) => {
    
    const newCake = await cakeService.create(data);

    setCake(state => [...state, newCake])

    navigate('/catalog')
  }

  

  const onCakeEditSubmit = async (values)=>{
    const result = await cakeService.edit(values._id, values);


    setCake(state => state.map(x => x._id === values._id ? result : x))

    navigate(`/catalog/${values._id}`);
  }
  
  return (
    <AuthProvider>
      <>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog cakes={cakes} />} />
            <Route path='/create' element={<CreateProduct onCakeCreateSubmit={onCakeCreateSubmit} />} />
            <Route path='/catalog/:cakeId' element={<Details />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/catalog/:cakeId/edit' element={<Edit  onCakeEditSubmit={onCakeEditSubmit}/>} />
          </Routes>




        </main>

        <Footer />

      </>
    </AuthProvider>
  );
}

export default App;
