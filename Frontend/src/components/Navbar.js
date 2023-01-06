import React, {useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom';


export default function Navbar() {
    let location = useLocation();
    useEffect(()=>{}, [location]);
    return (
        <>
        <div className='container navber-container'>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand logo">EBazaar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto nav">
                        <li className="nav-item"><Link to="/" className={`nav-link nav-text ${location.pathname==='/'?'active':''}`}>Home</Link></li>
                        <li className="nav-item"><Link to="/Bazar" className={`nav-link nav-text ${location.pathname==='/Bazar'?'active':''}`}>Bazaar</Link></li>
                        <li className="nav-item"><Link to="/Products" className={`nav-link nav-text ${location.pathname==='/Products'?'active':''}`}>Products</Link></li>
                        <li className="nav-item"><Link to="/" className={`nav-link nav-text ${location.pathname==='/CBS'?'active':''}`}>CBS</Link></li>
                        <li className="nav-item"><Link to="/" className={`nav-link nav-text ${location.pathname==='/Helpers'?'active':''}`}>Helpers</Link></li>
                        <li className="nav-item"><Link to="/" className={`nav-link nav-text ${location.pathname==='/ContactUs'?'active':''}`}>Contact Us</Link></li>
                        <li><img id="cart-img" src={require("../images/illustrations/cart.png")} alt='cart' /></li>
                        <li className="nav-item"><Link to="/login" className="nav-link"><button type="button" className="btn btn-outline-success nav-text">Sign In</button></Link></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </div>
        </>
    )
};