const express = require('express');
const router = express.Router();

let sales = [];

router.post('/', (req, res) => {
    const sale = req.body;
    sale.id = sales.length + 1;
    sales.push(sale);
    res.status(201).send(sale);
});

router.get('/', (req, res) => {
    res.send(sales);
});

router.get('/:id', (req, res) => {
    const sale = sales.find(s => s.id === parseInt(req.params.id));
    if (!sale) return res.status(404).send('Sale not found');
    res.send(sale);
});

router.put('/:id', (req, res) => {
    const sale = sales.find(s => s.id === parseInt(req.params.id));
    if (!sale) return res.status(404).send('Sale not found');
    
    sale.product_id = req.body.product_id;
    sale.quantity = req.body.quantity;
    sale.date = req.body.date;
    res.send(sale);
});

router.delete('/:id', (req, res) => {
    const saleIndex = sales.findIndex(s => s.id === parseInt(req.params.id));
    if (saleIndex === -1) return res.status(404).send('Sale not found');
    
    const deletedSale = sales.splice(saleIndex, 1);
    res.send(deletedSale);
});

module.exports = router;
