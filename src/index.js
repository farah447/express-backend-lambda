const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRouter = require('./routes/productRoute');

const app = express();

const mongoURL = process.env.MONGODB_URL || "";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
};

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
    connectDB();
});

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/users', (req, res) => {
    res.send({
        users: [
            { id: 1, name: "x" },
            { id: 2, name: "y" },
        ]
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRouter);

module.exports = app;



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

