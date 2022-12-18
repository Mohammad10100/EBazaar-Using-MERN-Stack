import React from 'react';
import '../Jquery/login.js';
import '../css/style_M.css';
import '../css/login.css';
// import { Link } from 'react-router-dom';
import {
    // BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import WelcomeC from './LoginComponents/WelcomeC';
import FarmerSignInC from './LoginComponents/FarmerSignInC.js';
import CustomerSignInC from './LoginComponents/CustomerSignInC.js';

export default function Login() {
    const sectionLine = {
        zIndex: '2',
        position: 'absolute',
        left: '49.8%',
        top: '83px',
        height: '100vh',
        width: '1px',
        border: '1x solid black',
        backgroundColor: 'Black',
        display: 'block important',
        padding: '0.2rem',
    };
    return (
        <>
            <div className="login_container">

                <div className="row row-login" >
                    {/* <Router> */}
                        <Routes>
                            <Route exact path="/" element={<WelcomeC />} />
                            <Route exact path="/FarmerSignIn" element={<FarmerSignInC />} />
                            <Route exact path="/CustomerSignIn" element={<CustomerSignInC />} />
                        </Routes>
                    {/* </Router> */}

                        {/* <div className="d-none d-sm-block d-xs-block"
                            style={sectionLine}>
                        </div> */}

                </div>
                <div className="d-none d-sm-block d-xs-block" ></div>
            </div>
        </>
    )
};