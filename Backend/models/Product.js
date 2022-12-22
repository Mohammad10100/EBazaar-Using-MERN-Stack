const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('../models/Users');


const ProductSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // default: 'this is the default product description coming from mongo- models - product schema',
        required: true,
    },
    imgURL: {
        type: String,
        required:false,
    },
    price: {
        type: String,
        required: true,
    },
});

const Products = mongoose.model('products' , ProductSchema);
module.exports = Products;