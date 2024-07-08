const express = require('express');
const productController = require('../controller/product');
const productRouter = express.Router();
// //endpoints - routes - api

productRouter.get('/', productController.getProduct)
    .get('/:id',productController.getOneProduct)
    .post('/',productController.createProduct)
    .put('/:id',productController.updateFullProduct)
    .patch('/:id', productController.updatePartialProduct)
    .delete('/:id',productController.deleteProduct)

exports.productRouter = productRouter;