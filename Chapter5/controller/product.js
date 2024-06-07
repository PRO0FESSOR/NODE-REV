const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json',"utf8"));
//rest api 

exports.getProduct = (req,res)=>{
    res.json(data.products);
}

exports.getOneProduct = (req,res)=>{
    const id = +req.params.id;
    const product = data.products.find(p=>p.id===id);
    res.json(product);
    console.log(product);
};

exports.createProduct = (req,res)=>{
    data.products.push(req.body)
    res.json(req.body);
    console.log(req.body);
}

exports.updateFullProduct = (req,res)=>{
    const id = +req.params.id;
    const updatedproduct = req.body;
    const productIndex = data.products.findIndex(p=>p.id===id)
    data.products.splice(productIndex,1,{...updatedproduct,id:id});
    res.json(updatedproduct); 
}

exports.updatePartialProduct = (req,res)=>{
    const id = +req.params.id;
    const updatedproduct = req.body;
    const productIndex = data.products.findIndex(p=>p.id===id)
    const product = data.products.find(p=>p.id===id)
    data.products.splice(productIndex,1,{...product,...updatedproduct});
    res.json(updatedproduct); 
}

exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productindex = data.products.findIndex(p=>p.id===id);
    data.products.splice(productindex,1);
    console.log(productindex);
    res.json({product:'deleted '});
}
