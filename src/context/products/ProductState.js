import ProductContext from "./productContext";
import { useState } from "react";

const host = "http://localhost:2000";

const ProductState = (props) => {
  const productsInitial = []
  const [products, setProducts] = useState(productsInitial)



  // Get User Products
  const getUserProducts = async () => {
    // API Call
    const response = await fetch(`${host}/api/products/fetchuserproducts`,{
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
  const addProduct = async (title, description, tag, imgURL) => {
    // API Call
    const response = await fetch(`${host}/api/products/addproducts`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNGNiZmQ3ZjQwZDAwNjMxMTZiZTVkIn0sImlhdCI6MTY3MTc0NDUwOX0.TUO2uMiXOa6fUTUG94ZxlA53KRDKMfgwozwqVoEy5nA'
      },
      body: JSON.stringify({title, description, tag, imgURL})
    });

    const product = {
      "_id": "63a4cc857f40d0067653116be5187652343",
      "user": "63a4cbfd7f40d0063116be5d",
      "title": title,
      "description": description,
      "imgURL": imgURL,
      "price": "30",
      "tag": tag,
      "__v": 0
    };
    setProducts(products.concat(product))
  }

  const deleteProduct = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/products/deleteproduct/${id}`, {
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

  const updateProduct = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/products/updateproduct/63a42f7d13a8785c69bdc41a`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMzgxMDNjZjNjNWEwNWFmMjc3NTNkIn0sImlhdCI6MTY3MTY1OTc3OX0.2OOyc2f3aDD-cw6Xb1qgL19BXBja4xGZnnz2mpe22_Q'
      },
      body: JSON.stringify(id, title, description, tag)
    });
    const json = response.json();

    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;

      }

    }
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct, getUserProducts }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;