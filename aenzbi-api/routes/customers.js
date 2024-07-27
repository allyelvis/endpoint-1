const express = require('express');
const router = express.Router();

let customers = [];

router.post('/', (req, res) => {
    const customer = req.body;
    customer.id = customers.length + 1;
    customers.push(customer);
    res.status(201).send(customer);
});

router.get('/', (req, res) => {
    res.send(customers);
});

router.get('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    res.send(customer);
});

router.put('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    
    customer.name = req.body.name;
    customer.email = req.body.email;
    res.send(customer);
});

router.delete('/:id', (req, res) => {
    const customerIndex = customers.findIndex(c => c.id === parseInt(req.params.id));
    if (customerIndex === -1) return res.status(404).send('Customer not found');
    
    const deletedCustomer = customers.splice(customerIndex, 1);
    res.send(deletedCustomer);
});

module.exports = router;
