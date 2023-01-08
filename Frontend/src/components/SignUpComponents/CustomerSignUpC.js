import React from 'react'
import {Link} from 'react-router-dom';

export default function CustomerSignUpC() {
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
    return (
        <>
            <div className='col-lg-6' id="customerSignUp" >
                <div style={Object.assign({}, Style.DivNoFlexD)}>
                    <form className='form-signup' action="" method="get">
                        <div className="headingDiv"><h4>Customer SignUp</h4></div>
                        <span className="inputContainer">
                            <label htmlFor="email">EMAIL</label>
                            <input type="text" name="email" autoComplete="off" />
                            <i className="fa fa-user"></i>
                        </span>
                        <span className="inputContainer">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" />
                            <i className="fa fa-lock"></i>
                        </span>
                        <span className="inputContainer">
                            <label htmlFor="name">YOUR NAME</label>
                            <input type="text" name="name" />
                            {/* <i className="fa fa-lock"></i> */}
                        </span>

                        {/* <Link className="forgotPassword" to="/">FORGOT PASSWORD</Link> */}
                        <input style={Object.assign({}, Style.BtnSignUp)}  type="button" className="btn-1" value="SIGNUP" />
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
