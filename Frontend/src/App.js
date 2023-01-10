import React, { useState } from 'react'
import './Jquery/login.js';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ProductState from './context/products/ProductState';
import Products from './components/ProductStore/ProductStore.js';
import ProductManager from './components/ProductManager/ProductManager';
import Advantages from './components/Advantages'
import HomeFooter from './components/HomeFooter.js';
import Bazar from './components/Bazar.js';

import{
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
}from 'react-router-dom';




function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  return (
    <>
    <ProductState>
    <Router>
        <Navbar/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={[<Home/>,<Advantages/> , <HomeFooter/>]}/>
          <Route exact path="/SignUp/*" element={<SignUp showAlert={showAlert}/>}/>
          <Route exact path="/LogIn" element={<LogIn showAlert={showAlert}/>}/>
          <Route exact path="/Bazar" element={<Bazar showAlert={showAlert}/>}/>
          <Route exact path="/ProductManager" element={<ProductManager showAlert={showAlert}/>}/>
          <Route exact path="/Products" element={<Products showAlert={showAlert}/>}/>
        </Routes>
    </Router>
    </ProductState>
    </>
  );
}

export default App;
