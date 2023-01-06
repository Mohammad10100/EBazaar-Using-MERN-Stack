import React from 'react';
import '../css/style_M_Login.css'
import '../css/Login.css'



export default function LogIn() {
    //not working
    let farmeractive='null';
    let onChange=()=>{
        farmeractive = document.querySelector('input[name="account-type"]:checked').value.toString();
    }
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
                    <div className='col-lg-7' >
                        <div style={Object.assign({}, Style.DivNoFlexD)}>
                            <form action="/" className='html' style={Object.assign({}, Style.DivNoFlexD, Style.DivFlex,)}>
                                <h2 className="">Sign Up</h2>
                                <p className="light">Please enter your datails to get signed-up to E Bazaar</p>
                                <input type="text" placeholder="Email/PhoneNo" id="" className="username my-1" />
                                <input type="password" placeholder="Password" id="" className="password my-1" />
                                <div className="radio my-1">
                                    {/* <Link id="trouble" to="/">
                                    Having trouble to sign in?
                                    </Link> */}
                                    <div className={`radio-choice ${farmeractive==='farmer'?'active-css':''}`}>
                                        Farmer
                                        <input onChange={onChange} type="radio" value="farmer" name="account-type" id="farmer_radio" />
                                    </div>
                                    <div className={`radio-choice ${farmeractive==='customer'?'active-css':''}`}>
                                        Customer
                                        <input onChange={onChange} type="radio" value="customer" name="account-type" id="customer_radio" />
                                    </div>
                                </div>
                                <div className="btn btn-success">Sign Up</div>
                                <p className="light">-- or Sign Up with --</p>
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