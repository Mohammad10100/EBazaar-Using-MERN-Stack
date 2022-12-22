import React from 'react';
import {Link} from 'react-router-dom';

export default function WelcomeC() {
    const Style = {
        DivNoFlexD: {
            // height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        DivFlex: {
            flexDirection: 'column',
        },
        DivSignIn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "column",
            margin: '4rem' ,
        },
        H1Text:{
            fontSize:'5vw',
        },
        BtnStyle:{
            width:'10rem',
        }
    };
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div id="farmer-sign-in" style={Object.assign({}, Style.DivSignIn)}>
                <h1 style={Object.assign({}, Style.H1Text)} className="h1-1text">ARE YOU A<br /><span style={{ color: "#198754" }}>FARMER</span>??</h1>
                <Link to="/login/FarmerSignIn" ><div type="button" style={Object.assign({}, Style.BtnStyle)} className="btn btn-outline-success" id="farmer">SIGN IN</div></Link>
            </div>
            <div id="customer-sign-in" style={Object.assign({}, Style.DivSignIn)} >
                <h1 style={Object.assign({}, Style.H1Text)} className="h2-2-text">ARE YOU A<br /><span style={{ color: "#198754" }}>CUSTOMER</span>??</h1>
                <Link to="/login/CustomerSignIn" ><div type="button" style={Object.assign({}, Style.BtnStyle)} className="btn btn-outline-success" id="customer">SIGN IN</div></Link>
            </div>
        </div>
    );
}