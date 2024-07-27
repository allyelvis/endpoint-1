const express = require('express');
const router = express.Router();

let stock = [];

router.post('/', (req, res) => {
    const item = req.body;
    item.id = stock.length + 1;
    stock.push(item);
    res.status(201).send(item);
});

router.get('/', (req, res) => {
    res.send(stock);
});

router.get('/:id', (req, res) => {
    const item = stock.find(s => s.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Stock item not found');
    res.send(item);
});

router.put('/:id', (req, res) => {
    const item = stock.find(s => s.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Stock item not found');
    
    item.quantity = req.body.quantity;
    item.product_id = req.body.product_id;
    res.send(item);
});

router.delete('/:id', (req, res) => {
    const itemIndex = stock.findIndex(s => s.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Stock item not found');
    
    const deletedItem = stock.splice(itemIndex, 1);
    res.send(deletedItem);
});

module.exports = router;
