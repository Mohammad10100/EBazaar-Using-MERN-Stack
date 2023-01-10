import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import productContext from '../../context/products/productContext';

export default function ProductItems1(props) {
    const context = useContext(productContext);
    const { fetchAllProducts } = context;
    const { product } = props;
    return (
        <>
            <div className="col-lg-4 " >
                <div className="card" >
                    <img src={product.imgURL} className="card-img-top" alt="product images" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to={"/"} className="btn btn-success">Buy Now</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
