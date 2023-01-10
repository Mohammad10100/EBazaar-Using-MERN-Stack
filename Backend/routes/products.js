const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Products = require('../models/Product');




//ROUTE:1 - Get all the products using GET "api/products/fetchuserproducts" Login required
router.get('/fetchuserproducts', fetchuser, async (req, res) => {
    try {
        const products = await Products.find({ user: req.user.id });
        res.json(products)
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }

})


//ROUTE:2 - Add a product using Post "api/products/addproduct" Login required
router.post('/addproducts', fetchuser, [
    body('title', 'Enter the title').isLength({ min: 4 }),
    body('description').isLength({ min: 10 }),
    body('price', "Must be in Rupee per KG")
    // res.json([])
], async (req, res) => {
    try {

        const { title, description, imgURL, price } = req.body;
        //if there are errors, return bad requests and the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const product = new Product({
            title, description, imgURL, price, user: req.user.id
        })
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }
})






///*************/
//ROUTE:3 - Get all the products using GET "api/products/fetchallproducts" No Login required
router.get('/fetchallproducts', async (req, res) => {
    try {
        const response = await Product.find()
        // console.log(response);
        res.send(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }
})

//ROUTE:4 - Updating and existing products using PUT "api/products/editproduct/:id" Login required
router.put('/editproduct/:id', fetchuser, async (req, res) => {
    const { title, description, imgURL } = req.body;

    try {

        const newProduct = {};
        if (title) { newProduct.title = title };
        if (description) { newProduct.description = description };
        if (imgURL) { newProduct.imgURL = imgURL };

        //find the note to updated and update (by id)
        let product = await Product.findById(req.params.id);
        if (!product) { res.status(404).send("Not Found") }

        // verify if the user is logged in 
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to edit this information");
        }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }

})



//ROUTE:5 - Deleting a product using DELETE "api/products/delete" Login required
router.delete('/deleteproduct/:id', fetchuser, async (req, res) => {

    try {
        //find the note to deleted (by id)
        let product = await Product.findById(req.params.id);
        if (!product) { res.status(404).send("Not Found") }


        // verify if the user is already logged in 
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to delete ");
        };

        product = await Product.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Product Deleted!", product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json.send("Internal server error occurred");
    }
})




module.exports = router