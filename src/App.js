import './App.css'
import Catalog from './components/Catalog';
import CreateProduct from './components/CreateProduct';
import Edit from './components/Edit';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
<>
   <Header   />
   <Home/>
<Edit/>
<Catalog/>
   <Footer/>

    </>
  );
}

export default App;
