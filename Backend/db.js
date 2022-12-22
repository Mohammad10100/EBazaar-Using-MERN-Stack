const mongoose = require("mongoose");
const mongoURI =  "mongodb://localhost:27017/ebazaar?readPreference=primary&directConnection=true&tls=false";

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongodb succesfully-console");
    })
}


module.exports = connectToMongo;