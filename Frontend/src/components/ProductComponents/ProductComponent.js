import React, { useRef, useContext, useState, useEffect } from 'react';
import productContext from '../../context/products/productContext';
import ProductItems from './ProductItems';
import AddProduct from './AddProduct';


const ProductComponent = (props) => {
    const {showAlert} = props;
    const context = useContext(productContext);
    const { products, getUserProducts, editProduct } = context;
    useEffect(() => {
        getUserProducts()
        // eslint-disable-next-line
    }, [])



    const ref = useRef(null);
    const refClose = useRef(null);
    const [product, setProduct] = useState({ etitle: "", edescription: "", eprice:"" })

    const updateProduct = (currentProduct) => {
        ref.current.click();
        setProduct({id: currentProduct._id, etitle: currentProduct.title, edescription: currentProduct.description, eprice:currentProduct.price});
    }
    
    const handleClick = (e) => {
        console.log("updating", product);
        editProduct(product.id, product.etitle, product.eprice, product.edescription);
        refClose.current.click();
        showAlert("Updated successfully", "success")

    }

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddProduct showAlert={showAlert}/>
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Product Details</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Modal Body */}
                            <form className="my-3 row" id="add-product-form">
                                <div className="row add-product-item-container">
                                    <div className="title-and-radio">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input value={product.etitle} type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={3} required/>
                                        <label htmlFor="eprice" className="form-label">Price</label>
                                        <input value={product.eprice} type="text" className="form-control" id="eprice" name="eprice" aria-describedby="emailHelp" onChange={onChange} minLength={1} required/>
                                    </div>

                                    <div className="description">
                                        <label htmlFor="edescription" className="form-label">Description</label>
                                        <input value={product.edescription} type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} minLength={10} required/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button disabled={product.etitle.length<3||product.edescription.length<10} type="button" className="btn btn-primary" onClick={handleClick} >Update Product Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Farmer's products</h2>
                <div className="container mx-4">
                {products.length===0 && 'No products on display by this Farmer'}
                </div>
            {products.map((product) => {
                return <ProductItems key={product._id} updateProduct={updateProduct} product={product} showAlert={showAlert}/>
            })}
            </div>
        </>
    )
}

export default ProductComponent;

