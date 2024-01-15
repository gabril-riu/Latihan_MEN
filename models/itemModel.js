const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema(
    {
        name:String,
        quantity:Number,
        price:Number,
        image:String
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('product',productSchema);

module.exports = Product;