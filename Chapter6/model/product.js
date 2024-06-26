const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema

const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
  }); 

exports.Product = mongoose.model('Product', productSchema);

