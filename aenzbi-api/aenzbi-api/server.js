const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const productRoutes = require('./routes/products');
const saleRoutes = require('./routes/sales');
const stockRoutes = require('./routes/stock');
const customerRoutes = require('./routes/customers');
const userRoutes = require('./routes/users');
const integrationRoutes = require('./routes/integration');

app.use('/products', productRoutes);
app.use('/sales', saleRoutes);
app.use('/stock', stockRoutes);
app.use('/customers', customerRoutes);
app.use('/users', userRoutes);
app.use('/integration', integrationRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
