//import express from 'express';
const express = require('express')

const app = express();

const port = 3004;

let products = [
    { id: 1, title: "apple1", price: 320 },
    { id: 2, title: "apple2", price: 420 },
    { id: 3, title: "apple3", price: 520 },
];

app.get('/', (req, res) => {
    res.send("welcome");
});

app.get('/products', (req, res) => {
    res.send({
        products: products,
    });
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((product) => product.id === id);
    res.send({
        product: product,
    });
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});
