const express = require('express');
const server = express();

const Router = require('./routes/product')


// //middleware to use request body

server.use(express.json());
server.use('/products',Router.productRouter);


server.listen(8080, () => {
    console.log("server started");
});