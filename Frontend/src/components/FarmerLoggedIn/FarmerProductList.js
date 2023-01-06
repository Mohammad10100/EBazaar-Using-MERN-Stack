import React, { useContext } from 'react';
import productContext from '../../context/products/productContext';
import ProductItems from '../../components/ProductComponents/ProductItems';
import AddProduct from '../../components/ProductComponents/AddProduct';


const ProductComponent = () => {
    const context = useContext(productContext);
    const {products} = context;
    return (
        <>
            <AddProduct />
            <div className="row">
                {products.map((product) => {
                    return <ProductItems key={product._id} product={product} />
                })}
            </div>
        </>
    )
}

export default ProductComponent;

