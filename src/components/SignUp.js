import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style_M_Login.css'
import '../css/SignUp.css'



export default function SignUp() {
    const Style = {
        DivNoFlexD: {
            // height: '100vh',
            // width: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        DivFlex: {
            flexDirection: 'column',
        },
        IllustrationStyle: {
            height: "100%",
            width: "100%"
        }
    };
    return (
        <>
            <div className="container SignUp-Container">
                <div className='row'>
                    <div className='col-lg-6' >
                        <div style={Object.assign({}, Style.DivNoFlexD)}>
                            <form action="/" className='html' style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex,)}>
                                <h2 className="">Sign Up</h2>
                                <p className="light">Please enter your datails to get signed-in to your account</p>
                                <input type="text" placeholder="Email/PhoneNo" id="" className="username" />
                                <input type="password" placeholder="Password" id="" className="password" />
                                <Link id="trouble" to="/">Having trouble to sign in?</Link>
                                <div className="btn btn-success">Sign In</div>
                                <p className="light">-- or Sign in with --</p>
                                <ul className="signUl">
                                    <li className="signLi"><i className="fa fa-google"></i> Apple ID </li>
                                    <li className="signLi"><i className="fa fa-google"></i> Google</li>
                                    <li className="signLi"><i className="fa fa-google"></i> Facebook</li>
                                </ul>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6" style={Style.DivNoFlexD}>
                        <div className="illustrative_Image" style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex,)}>
                            <img style={Object.assign({}, Style.IllustrationStyle)} src={require("../images/illustrations/undraw_Mobile_posts_re_bpuw.png")} alt="Illustrative_image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};