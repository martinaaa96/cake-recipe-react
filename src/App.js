
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CakeProvider } from './contexts/CakeContext';


import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Header from './components/Header/Header';
import Error from './components/Error/Error';

import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
 import RouteGuard from './components/common/RouteGuard';
import { CakeOwner } from './components/common/CakeOwner';


function App() {
  return (
    <AuthProvider>
      <CakeProvider>
      
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/catalog/:cakeId' element={<Details  />} />
          

            <Route element ={<RouteGuard/>}>
            <Route path='/catalog/:cakeId/edit' element={
              <CakeOwner>
                <Edit />
              </CakeOwner>
            } />
             <Route path='/create' element={<CreateProduct  />} />
             <Route path='/logout' element={<Logout />} />
            </Route>
            
            <Route path='/*' element={<Error />} />
          
          </Routes>
        </main>

        <Footer />

      
      </CakeProvider>
    </AuthProvider>
  );
}

export default App;
