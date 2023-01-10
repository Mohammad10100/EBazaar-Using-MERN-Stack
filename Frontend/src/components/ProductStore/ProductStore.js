import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/Products.css';
import ProductList from './ProductList';


export default function ProductStore() {


  return (
    <div>
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
            <ProductList />
          </div>
        </div>
      </section>
    </div>
  )
}
