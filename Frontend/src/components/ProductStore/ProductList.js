import React, {useContext, useEffect} from 'react'
import ProductItems1 from './ProductItems1';
import productContext from '../../context/products/productContext';


export default function ProductList() {
    const context = useContext(productContext);
    const { products, fetchAllProducts } = context;
    useEffect(() => {
        fetchAllProducts()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {products.map((product) => {
                return <ProductItems1 product={product}/>
            })}
        </>
    )
}
