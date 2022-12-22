const connectToMongo = require('./db.js');
const express = require('express');


connectToMongo();
const app = express();
const port = 2000;


//middleware
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})