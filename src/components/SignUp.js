import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style_M_Login.css'
import '../css/SignUp.css'



export default function SignUp() {
    return (
        <>
        <div className="container SignUp-Container">
            <form action="/" className="html">
                <h2 className="">Login</h2>
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

            <div className="illustrative_Image">
                <img src={require("../images/illustrations/undraw_Mobile_posts_re_bpuw.png")} alt="Illustrative_image"/>
            </div>
        </div>
        </>
    )
};