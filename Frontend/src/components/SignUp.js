import React from 'react';
import '../Jquery/login.js';
import '../css/style_M.css';
import '../css/SignUp.css';
import WelcomeC from './SignUpComponents/WelcomeC';
import FarmerSignUpC from './SignUpComponents/FarmerSignUpC'
import CustomerSignUpC from './SignUpComponents/CustomerSignUpC'

import { Routes, Route} from 'react-router-dom';

export default function SignUp(props) {
    const {showAlert} = props;
    return (
        <>
            <div className="singup_container">

                <div className="row row-signup" >
                    <Routes>
                        <Route exact path="/" element={<WelcomeC url="SignUp" />} />
                        <Route exact path="/FarmerSignUp" element={<FarmerSignUpC showAlert={showAlert}/>} />
                        <Route exact path="/CustomerSignUp" element={<CustomerSignUpC showAlert={showAlert}/>} />
                    </Routes>
                </div>
                <div className="d-none d-sm-block d-xs-block" ></div>
            </div>
        </>
    )
};