import React, { useContext, useEffect } from 'react';
import productContext from '../context/products/productContext';
import ProductItems from './ProductItems';
import AddProduct from './AddProduct';


const ProductComponent = () => {
    const context = useContext(productContext);
    const {products, getUserProducts} = context;
    useEffect(()=>{
        getUserProducts()
    },[])
    return (
        <>
            <AddProduct />
                {products.map((product) => {
                    return <ProductItems key={product._id} product={product} />
                })}
        </>
    )
}

export default ProductComponent;

