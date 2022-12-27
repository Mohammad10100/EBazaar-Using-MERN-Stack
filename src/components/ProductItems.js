import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import productContext from '../context/products/productContext';

const ProductItems = (props) => {
    const context = useContext(productContext);
    const { deleteProduct } = context;
    const { product } = props;
    return (
        <>
            <div className="col-lg-4 " >
                <div className="card" >
                    <img src={product.imgURL} className="card-img-top" alt="product images" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="FarmerLoggedIn">
                            <i onClick={()=>{deleteProduct(product._id)}} className="far fa-trash-alt mx-2"></i>
                            <i className="far fa-edit mx-2"></i>
                        </div>
                        <Link to={"/"} className="btn btn-success">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductItems;



