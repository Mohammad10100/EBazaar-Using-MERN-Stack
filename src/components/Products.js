import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';
import ProductComponent from './ProductComponent';



export default function Products() {
  return (
    <>
      <section id="pd-section-1">
        <button type="button" className="btn btn-outline-success pd-category-btn" >fiber crops</button>
        <button type="button" className="btn btn-outline-success pd-category-btn" >Industrial Crops</button>
        <button type="button" className="btn btn-outline-success pd-category-btn" >Food Crops</button>
        <button type="button" className="btn btn-outline-success pd-category-btn" >Feed Crops</button>
        <button type="button" className="btn btn-outline-success pd-category-btn" >Oil Crops</button>
      </section>
      <section id="pd-section-2">
        <div className="container" > 
          <div className="row" >
        <ProductComponent/>
            <div className="col-lg-4 " >
              <div className="card" >
                <img src={require("../images/img-1.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Cassava</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="card" >
                <img src={require("../images/img-2.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Maize</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="card" >
                <img src={require("../images/img-3.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Plantains</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-lg-4" >
              <div className="card" >
                <img src={require("../images/img-4.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Potatos</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="card">
                <img src={require("../images/img-5.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Rice</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <div className="card" >
                <img src={require("../images/img-6.jpg")} className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Soybeans</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-lg-4" >
              <div className="card">
                <img src="..." className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card" >
                <img src="..." className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="product images" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-success">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


