const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/productRoute');
const connectDB = require('./config/db');

const app = express();


connectDB();

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.use(cors());
app.use('/products', productRouter);

module.exports = app;

/*app.get('/users', (req, res) => {
    res.send({
        users: [
            { id: 1, name: "x" },
            { id: 2, name: "y" },
        ]
    });
});*/

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));



/*let products = [
    { id: 1, title: "apple1", price: 320 },
    { id: 2, title: "apple2", price: 420 },
    { id: 3, title: "apple3", price: 520 },
];*/

/*app.get('/products', (req, res) => {
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
});*/

