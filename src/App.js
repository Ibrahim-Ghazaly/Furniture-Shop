import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes,Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Wishlist from './pages/Wishlist/Wishlist';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';
import RequireAuth from './redux/RequireAuth'

function App() {


  return (
    <div className="App">
        <NavBar/>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path ="/shop" element={<Shop/>}></Route>
           <Route path ="/products/:id"   element={<Products/>}></Route>
           <Route path ="/product/:id"   element={<Product/>}></Route>
           <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>}></Route>
           <Route path="/wishlist" element={<RequireAuth><Wishlist/></RequireAuth>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
       <Footer/>
    
    </div>
  );
}

export default App;
