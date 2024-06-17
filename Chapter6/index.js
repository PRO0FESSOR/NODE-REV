const express = require('express');
const server = express();

const Router = require('./routes/product');

// db setup

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// //middleware to use request body

server.use(express.json());
server.use('/products',Router.productRouter);


server.listen(8080, () => {
    console.log("server started");
});