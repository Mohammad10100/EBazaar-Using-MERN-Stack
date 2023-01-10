import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/style_M_Login.css'
import '../css/Login.css'

const host=`http://localhost:8080/`


export default function LogIn(props) {
    // const {showAlert} = props;

    const [credentials, setCredentials] = useState({ email: "", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked");
        const response = await fetch(`${host}api/auth/login`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            //save auth token to localstorage and reditrect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Loggin Successfull", "success")
        }else{
            props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

const Style = {
    DivNoFlexD: {
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
                <div className='col-lg-7' >
                    <div style={Object.assign({}, Style.DivNoFlexD)}>
                        <form onSubmit={handleSubmit} className='html' style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex,)}>
                            <h2 className="">Sign In</h2>
                            <p className="light">Please enter your datails to get signed-up to E Bazaar</p>
                            <input type="text" placeholder="Email/PhoneNo" id="login_email" name="email" className="username my-1" value={credentials.email}  onChange={onChange}/>
                            <input type="password" placeholder="Password" id="login_password" name="password" className="password my-1" value={credentials.password}  onChange={onChange}/>
                            {/* <div className="radio my-1">
                                    <Link id="trouble" to="/">Having trouble to sign in?</Link>
                                    <div className={`radio-choice ${farmeractive==='farmer'?'active-css':''}`}>
                                        Farmer
                                        <input onChange={onChange} type="radio" value="farmer" name="account-type" id="farmer_radio" />
                                    </div>
                                    <div className={`radio-choice ${farmeractive==='customer'?'active-css':''}`}>
                                        Customer
                                        <input onChange={onChange} type="radio" value="customer" name="account-type" id="customer_radio" />
                                    </div>
                                </div> */}
                            <button type="submit" className="btn btn-success">Sign In</button>
                            <p className="light">-- or Sign In with --</p>
                            <ul className="signUl">
                                <li className="signLi"><i className="fa fa-apple"> </i> Apple ID </li>
                                <li className="signLi"><i className="fa fa-google"> </i> Google</li>
                                <li className="signLi"><i className="fa fa-facebook"> </i> Facebook</li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="col-lg-5" style={Style.DivNoFlexD}>
                    <div className="illustrative_Image" style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex,)}>
                        <img style={Object.assign({}, Style.IllustrationStyle)} src={require("../images/illustrations/undraw_Mobile_posts_re_bpuw.png")} alt="Illustrative_image" />
                    </div>
                </div>
            </div>
        </div>
    </>
)
};