import React from 'react'

import '../src/Jquery/login.js';
// import '../src/css/bootstrap.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Products from './components/Products.js';
import Advantages from './components/Advantages'
import HomeFooter from './components/HomeFooter.js';
import Bazar from './components/Bazar.js';
// import ProductComponents from './components/ProductComponent.js';


import{
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
}from 'react-router-dom';






function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={[<Home/>,<Advantages/> , <HomeFooter/>]}/>
          <Route path="/Login/*" element={<Login/>}/>
          <Route path="/SignUP" element={<SignUp/>}/>
          <Route path="/Bazar" element={<Bazar/>}/>
          <Route path="/Products" element={<Products/>}/>
        </Routes>
    </Router>
      
    </>
  );
}

export default App;
