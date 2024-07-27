const express = require('express');
const router = express.Router();

let products = [];

router.post('/', (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.status(201).send(product);
});

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

router.put('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    
    product.name = req.body.name;
    product.price = req.body.price;
    res.send(product);
});

router.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');
    
    const deletedProduct = products.splice(productIndex, 1);
    res.send(deletedProduct);
});

module.exports = router;
