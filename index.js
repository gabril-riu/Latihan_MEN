const express = require('express');
const app = express();

app.use(express.json());

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

app.post('/blog',(req,res)=>{
    res.end(req.body);
})