const express = require('express');
const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json',"utf8"));
const server = express();

// //middleware to use request body

server.use(express.json());

// // rest api 

// //endpoints - routes - api

// // read 

// //read all

server.get('/products',(req,res)=>{
    res.json(data.products);
})

// //read one 

server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = data.products.find(p=>p.id===id);
    res.json(product);
    console.log(product);
})


// //create -- post

server.post('/products',(req,res)=>{
    data.products.push(req.body)
    res.json(req.body);
    console.log(req.body);
})

//update 

//fully 

server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const updatedproduct = req.body;
    const productIndex = data.products.findIndex(p=>p.id===id)
    data.products.splice(productIndex,1,{...updatedproduct,id:id});
    res.json(updatedproduct); 
})

//partially

server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const updatedproduct = req.body;
    const productIndex = data.products.findIndex(p=>p.id===id)
    const product = data.products.find(p=>p.id===id)
    data.products.splice(productIndex,1,{...product,...updatedproduct});
    res.json(updatedproduct); 
})

//delete

server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productindex = data.products.findIndex(p=>p.id===id);
    data.products.splice(productindex,1);
    console.log(productindex);
    res.json({product:'deleted '});
})


server.listen(8080, () => {
    console.log("server started");
});
