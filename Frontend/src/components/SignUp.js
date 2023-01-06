import React from 'react';
import '../Jquery/login.js';
import '../css/style_M.css';
import '../css/SignUp.css';
import WelcomeC from './SignUpComponents/WelcomeC';
import FarmerSignUpC from './SignUpComponents/FarmerSignUpC'
import CustomerSignUpC from './SignUpComponents/CustomerSignUpC'

import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';

export default function SignUp() {
    return (
        <>
            <div className="login_container">

                <div className="row row-login" >
                    <Routes>
                        <Route exact path="/" element={<WelcomeC url="SignUp" />} />
                        <Route exact path="/FarmerSignUp" element={<FarmerSignUpC/>} />
                        <Route exact path="/CustomerSignUp" element={<CustomerSignUpC/>} />
                        <Route exact path="/hellow" element={<Navbar/>} />
                    </Routes>
                </div>
                <div className="d-none d-sm-block d-xs-block" ></div>
            </div>
        </>
    )
};