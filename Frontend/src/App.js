import React from 'react'
import './Jquery/login.js';
import Navbar from './components/Navbar';
import { Alert } from './components/Alert';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ProductState from './context/products/ProductState';
import Products from './components/ProductComponents/Products';
import ProductManager from './components/FarmerLoggedIn/ProductManager';
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
  return (
    <>
    <ProductState>
    <Router>
        <Navbar/>
        <Alert message="This is amazing React course" />
        <Routes>
          <Route exact path="/" element={[<Home/>,<Advantages/> , <HomeFooter/>]}/>
          <Route exact path="/SignUp/*" element={<SignUp/>}/>
          <Route exact path="/LogIn" element={<LogIn/>}/>
          <Route exact path="/Bazar" element={<Bazar/>}/>
          <Route exact path="/Products" element={<Products/>}/>
          <Route exact path="/ProductManager" element={<ProductManager/>}/>
        </Routes>
    </Router>
    </ProductState>
    </>
  );
}

export default App;
