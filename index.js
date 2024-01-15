const express = require('express');
const Product = require("./models/itemModel");

const app = express();

app.use(express.json());
//for Form URL
app.use(express.urlencoded({extended: false}))

const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/latihan_rest_api').then(()=>{
    console.log('Berhasil menghubungkan ke Mongo DB'),
    app.listen(4000, () => {
        console.log('server running in http://localhost:4000');
    })
}).catch((error)=>{
    console.log(error);
});

app.get('/', (req, res) => {
    res.end('ini adalah halaman home');
})

// Get Data
app.get('/products', async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// GET id Products
app.get('/products/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//post products
app.post('/products',async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
})

// Update Product
app.put('/products/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).json({message: `cannot find any product with: ${product}`});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})