const connectToMongo = require('./db.js');
const express = require('express');
const cors = require('cors')



const app = express(); 
const port = 2000;

//middleware
app.use(express.json());
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));


connectToMongo();


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));



  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`E-Bazar listening  on port ${port}`)
})