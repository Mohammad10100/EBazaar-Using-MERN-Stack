import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function CustomerSignUpC(props) {
    const {showAlert} = props;
    const host = "http://localhost:8080/";
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
        BtnSignUp: {
            backgroundColor: '#198754',
        }
    };

    const [credentials, setCredentials] = useState({ email: "", password: "", name:""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked");
        const response = await fetch(`${host}api/auth/createuser`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password,  name: credentials.name})
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            //save auth token to localstorage and reditrect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            showAlert("Account Created Successfully", "success")
        }else{
            showAlert("user already exists", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const account_type="customer";
    return (
        <>
            <div className='col-lg-6' id="customerSignUp" >
                <div style={Object.assign({}, Style.DivNoFlexD)}>
                    <form onSubmit={handleSubmit} className='form-signup' action="" method="get">
                        <div className="headingDiv"><h4>Customer SignUp</h4></div>
                        <span className="inputContainer">
                            <label htmlFor="email">EMAIL</label>
                            <input value={credentials.email} onChange={onChange} required type="text" name="email" autoComplete="off" />
                            <i className="fa fa-user"></i>
                        </span>
                        <span className="inputContainer">
                            <label htmlFor="password">PASSWORD</label>
                            <input value={credentials.password} onChange={onChange} required minLength={8} type="password" name="password" />
                            <i className="fa fa-lock"></i>
                        </span>
                        <span className="inputContainer">
                            <label htmlFor="name">YOUR NAME</label>
                            <input value={credentials.name} onChange={onChange} required minLength={3} type="text" name="name" />
                            {/* <i className="fa fa-lock"></i> */}
                        </span>

                        {/* <Link className="forgotPassword" to="/">FORGOT PASSWORD</Link> */}
                        <button  style={Object.assign({}, Style.BtnSignUp)} type="submit" className="btn-1 btn-success">Sign Up</button>

                    </form>
                </div>
            </div>
            <div  id="welcome-text-2" className="col-lg-6 welcome-text">
                <div style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex)}>
                    <h1 style={{ textAlign: "center" }}>Wecolme Back to <span style={{ color: "#198754" }}>EBazaar</span></h1>
                    <Link to="/SignUp"><button className="btn btn-outline-success" id="return-2">Return Back</button></Link>
                </div>
            </div>
        </>
    )
}
