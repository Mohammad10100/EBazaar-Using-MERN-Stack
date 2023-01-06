import ProductContext from "./productContext";
import { useState } from "react";

// const host = "http://localhost:2000/";
const host = "";

const ProductState = (props) => {
  const productsInitial = []
  const [products, setProducts] = useState(productsInitial)



  // Get User Products
  const getUserProducts = async () => {
    // API Call
    const response = await fetch(`${host}api/products/fetchuserproducts`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNGNiZmQ3ZjQwZDAwNjMxMTZiZTVkIn0sImlhdCI6MTY3MTc0NDUwOX0.TUO2uMiXOa6fUTUG94ZxlA53KRDKMfgwozwqVoEy5nA'
      },
    });
    const json = await response.json();

    // console.log(json);
    setProducts(json);
  }
  
  

  // Add a Product
  const addProduct = async (title, description, tag, price, imgURL) => {
    // API Call
    const response = await fetch(`${host}api/products/addproducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNGNiZmQ3ZjQwZDAwNjMxMTZiZTVkIn0sImlhdCI6MTY3MTc0NDUwOX0.TUO2uMiXOa6fUTUG94ZxlA53KRDKMfgwozwqVoEy5nA'
      },
      body: JSON.stringify({title, description, tag, price, imgURL})
    });

    const product = await response.json();
    setProducts(products.concat(product))
  }

  const deleteProduct = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}api/products/deleteproduct/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNGNiZmQ3ZjQwZDAwNjMxMTZiZTVkIn0sImlhdCI6MTY3MTc0NDUwOX0.TUO2uMiXOa6fUTUG94ZxlA53KRDKMfgwozwqVoEy5nA'
      },
    });
    const json = response.json();
    const newProducts = products.filter((product) => { return product._id !== id });
    setProducts(newProducts);
  }


  const editProduct = async (id, title, price, description) => {
    // API Call
    const response = await fetch(`${host}api/products/editproduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNGNiZmQ3ZjQwZDAwNjMxMTZiZTVkIn0sImlhdCI6MTY3MTc0NDUwOX0.TUO2uMiXOa6fUTUG94ZxlA53KRDKMfgwozwqVoEy5nA'
      },
      body: JSON.stringify({id, title, price, description})
    });
    const json = await response.json();

    let newProducts = JSON.parse(JSON.stringify(products));

    // logic to update in client 
    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];
      if (element._id === id) {
        newProducts[index].title = title;
        newProducts[index].price = price;
        newProducts[index].description = description;
        // newProduct.tag = tag;

        break;
      }

      setProducts(newProducts)
    }
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, editProduct, getUserProducts }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;