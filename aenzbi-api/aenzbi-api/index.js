const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Route modules
const productRoutes = require('./routes/products');
const saleRoutes = require('./routes/sales');
const stockRoutes = require('./routes/stock');
const customerRoutes = require('./routes/customers');
const userRoutes = require('./routes/users');
const integrationRoutes = require('./routes/integration');

// Routes
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);
app.use('/stock', stockRoutes);
app.use('/customers', customerRoutes);
app.use('/users', userRoutes);
app.use('/integration', integrationRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});