import React from 'react';
import { Link } from 'react-router-dom';


export default function WelcomeC(props) {
    console.log(props.url);
    const Style = {
        DivNoFlexD: {
            // height: '100vh',
            width: '80%',
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
            margin: '4rem',
        },
        H1Text: {
            fontSize: '4vw',
            // fontSize: '2vw',
        },
        BtnStyle: {
            width: '10rem',
        }
    };
    return (
        <>
            <div className='col-lg-6' id="farmer-sign-in">
                <div style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex, { margin: "4rem" })}>
                    <h1 style={Object.assign({}, Style.H1Text)} className="h1-1text">ARE YOU A<br /><span style={{ color: "#198754" }}>FARMER</span>??</h1>
                    <br />
                    <Link to={"Farmer"+props.url} ><div type="button" style={Object.assign({}, Style.BtnStyle)} className="btn btn-outline-success" id="farmer">SIGN IN</div></Link>
                </div>
            </div>
            <div className='col-lg-6' id="customer-sign-in" >
                <div style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex, { margin: "4rem" })}>
                    <h1 style={Object.assign({}, Style.H1Text)} className="h2-2-text">ARE YOU A<br /><span style={{ color: "#198754" }}>CUSTOMER</span>??</h1>
                    <Link to={"Customer"+props.url} ><div type="button" style={Object.assign({}, Style.BtnStyle)} className="btn btn-outline-success" id="customer">SIGN IN</div></Link>
                </div>
            </div>
        </>
    );
}


