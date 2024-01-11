const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            typeof: String,
            required: [true,'Please Enter the name'],
        },
        quantity:{
            typeof: Number,
            required: true,
            default: 0
        },
        price:{
            typeof: Number,
            required: true
        },
        img:{
            typeof: String,
            required:false
        }
    },
    {
        timestamps: true
    }
)

const product = mongoose.model('product',productSchema);

module.exports = product;