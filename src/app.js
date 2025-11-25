const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

// Rotas
app.use('/products', productRoutes);

module.exports = app;
