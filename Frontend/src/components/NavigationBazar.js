import React from 'react'
import { Link } from 'react-router-dom'


export default function NavigationBazar() {
    return (
        <>
        <div className="navigationContainer">
            
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand logo">EBazaar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto nav">
                        <li className="nav-item"><Link to="/" className="nav-link nav-text">Home</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link nav-text">Products</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link nav-text">CBS</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link nav-text">Helpers</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link nav-text">Contact Us</Link></li>

                    </ul>
                </div>
            </nav>
            <hr />
        </div>
        </>
    )
};