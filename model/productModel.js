const mongoose = require('mongoose')
const productSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Array,
       
    },
    description:{
       type:String,
       required:true
    }
})
const productmodel = mongoose.model('product',productSchema)
module.exports = productmodel