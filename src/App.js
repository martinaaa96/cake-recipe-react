import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { cakeServiceFactory } from './services/cakeService';
import { AuthContext } from './components/contexts/AuthContext';
import { authServiceFactory } from './services/authService';
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

  const [auth, setAuth] = useState({});

  const cakeService = cakeServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken)

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


  const onLoginSubmit = async (data) => {

    try {
      const result = await authService.login(data);
      setAuth(result)

      navigate('/');

    } catch (error) {

      console.log(`Error`)
    }


  }

  const onRegisterSubmit = async (values) => {
    const { repeatPassword, ...dataRegister } = values;
    if (repeatPassword !== dataRegister.password) {

      return;
    }
    try {

      const result = await authService.register(dataRegister);
      setAuth(result)
      navigate('/login');


    } catch (error) {
      console.log(`Error`);

    }
  }
  const onLogout = async () => {

    await authService.logout();
    setAuth({});


  }

  const onCakeEditSubmit = async (values)=>{
    const result = await cakeService.edit(values._id, values);

    setCake(state => state.map(x => x._id === values._id ? result : x))   

    navigate(`/catalog/${values._id}`)
  }
  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,

  };
  return (
    <AuthContext.Provider value={context}>
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
    </AuthContext.Provider>
  );
}

export default App;
