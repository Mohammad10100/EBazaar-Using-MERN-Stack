import React, { useContext, useState } from 'react'
import productContext from "../../context/products/productContext";

const AddProduct = () => {
    const context = useContext(productContext);
    const { addProduct } = context;
    const [product, setProduct] = useState({ title: "", description: "", tag:"", price:"400", imgURL: "null" })

    const handleClick = (e) => {
        e.preventDefault();
        addProduct(product.title, product.description, product.tag, product.price, product.imgURL);
        // setProduct({ title: "", description: "", tag:"", price:"", imgURL: "" })
        setProduct({ title: "", description: "", tag:"", price:"", imgURL: "" })
    }

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3 add-product-container">
            <h2>Add a Product</h2>
            <form className="my-3 row" id="add-product-form">
                <div className="row add-product-item-container">
                    <div className="title-and-radio col-md-7 col-lg-5">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={product.title} onChange={onChange} minLength={3} required/>
                            <label htmlFor="tag-radio">Product Type:</label>
                        <div name="tag-radio" className="tag-radio">
                            <input type="radio" name='tag' className="form-check-input" value="fiber" onChange={onChange}  />
                            <label className="form-check-label" htmlFor="exampleCheck1">Fiber Crop</label>
                            <input type="radio" name='tag' className="form-check-input" value="industrial" onChange={onChange}  />
                            <label className="form-check-label" htmlFor="exampleCheck1">Industrial Crop</label>
                            <input type="radio" name='tag' className="form-check-input" value="food" onChange={onChange}  />
                            <label className="form-check-label" htmlFor="exampleCheck1">Food Crop</label>
                            <input type="radio" name='tag' className="form-check-input" value="feed" onChange={onChange}  />
                            <label className="form-check-label" htmlFor="exampleCheck1">Feed Crop</label>
                            <input type="radio" name='tag' className="form-check-input" value="oil" onChange={onChange}  />
                            <label className="form-check-label" htmlFor="exampleCheck1">Oil Crop</label>
                        </div>
                        <label htmlFor="img">Select image:</label>
                        <input type="file" id="imgURL" name="imgURL" accept="image/*" onChange={onChange}  />
                    </div>

                    <div className="description col-md-6 col-lg-5">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={product.description} onChange={onChange} minLength={10} required/>
                    </div>

                    <button disabled={product.title.length<3||product.description.length<10} type="submit" className="btn btn-success " id='add-product-btn' onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct