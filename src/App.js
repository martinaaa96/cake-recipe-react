import { useState, useEffect } from 'react';
import { Routes, Route , useNavigate} from 'react-router-dom';

import * as cakeService from './services/cakeService';
import { AuthContext } from './components/contexts/AuthContext';

import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Catalog from './components/Catalog/Catalog';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Header from './components/Header';

import './App.css'
import Details from './components/Details';
function App() {
  const navigate = useNavigate();

  const [cakes, setCake] = useState([]);

  const [auth,setAuth]= useState({});


  useEffect(()=>{
    cakeService.getAll()
    .then(result =>{
     setCake(result)
    })
  },[]);
  
  const onCakeCreateSubmit = async (data )=>{
console.log(data)
const newCake = await cakeService.create(data);

setCake(state => [...state,newCake])

navigate('/catalog')
  }


  const onLoginSubmit = async (e)=>{
e.preventDefault();
console.log(Object.fromEntries(new FormData(e.target)))

  }
  return (
    <AuthContext.Provider value={{onLoginSubmit}}>
    <>
<Header/>
      
      <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/catalog' element={<Catalog cakes={cakes}/>} />
      <Route path='/create' element={ <CreateProduct onCakeCreateSubmit={onCakeCreateSubmit}/>} />
      <Route path ='/catalog/:cakeId' element={<Details/>}/>
      </Routes>

      
    

</main>

      <Footer />


    </>
    </AuthContext.Provider>
  );
}

export default App;
