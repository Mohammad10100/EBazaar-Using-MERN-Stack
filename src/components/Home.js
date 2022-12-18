import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'
import './Advantages'


export default function Article() {
    return (
        <>
            <div className="container">

                <section>
                    <div className="row div-title">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="title-text text-wrap">Fresh From<br />Farms!</h1>
                            <h3 className="text-wrap">
                                <span className="highlight-text">EBazaar</span> provides a platform for the farmers to directly sell and trade
                                with their customers.
                            </h3>
                            <div className="row sign-up-card">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Are you a Farmer?</h5>
                                            <hr />
                                            <p className="card-text">Increase your Profit and Customers with us!</p>
                                            <Link to="/signup" className="btn btn-success">Sign Up Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>To know more about us <Link to="/" className="highlight-text about-link"
                            >Click Here</Link></p>
                        </div>

                        <div className="col-lg-6 col-md-12 div-farmer-img shadow-lg rounded ">
                            <img src={require('../images/title-img/farmer.png')} alt="farmer png" className="farmer img-fluid" />
                        </div>
                    </div> 
                </section>
            </div>
        </>
    )
};