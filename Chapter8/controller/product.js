
const model  = require('../model/product');
const Product = model.Product;

//rest api 

//create

exports.createProduct = async(req,res)=>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    }
    catch(error){
        res.status(400).json(error);
    }
}

//read

exports.getProduct = async(req,res)=>{
    try{
        const doc = await Product.find();
        res.status(201).json(doc);
    }
    catch(error){
        res.status(400).json(error);
    }

}

exports.getOneProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findById(id);
        res.status(201).json(doc);
    }
    catch(error){
        res.status(400).json(error);
    }
};

//update

exports.updateFullProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body)
        res.status(201).json(doc);
    }
    catch(error){
        res.status(400).json(error);
    } 
}

exports.updatePartialProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(error){
        res.status(400).json(error);
    } 
}

//delete

exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(error){
        res.status(400).json(error);
    } 
}
