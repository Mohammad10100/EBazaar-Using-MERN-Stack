import React from 'react';
import {Link} from 'react-router-dom';

export default function  ProductItems(props) {
        let {productImageUrl, title, description} =props;
        return (
            <>
                {/* <div className="col-lg-4 " > */}
                    <div className="card" >
                        <img src={"../images"+productImageUrl} className="card-img-top" alt="product images" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <Link to={"/"+productImageUrl} className="btn btn-success">Buy Now</Link>
                        </div>
                        <img src="/theebazaar/src/images/img-1.jpg" alt="" />
                    </div>
                {/* </div> */}
            </>
        )
}
