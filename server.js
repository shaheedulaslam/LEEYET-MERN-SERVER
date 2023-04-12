require("dotenv").config()
const express = require("express")
const app = express()
const path = require('path')
const multer =require('multer')
const cors = require('cors')


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public')
    },
    filename: (req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+ file.originalname)
    }
})
const filefilter = (req,file,cb)=>{
    if(file.mimetype==='image/png'|| file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}




const productRouter = require('./router/product')

app.use(express.urlencoded({ limit: '10mb', extended: false }))
app.use('/public',express.static(path.join(__dirname,'public')))
app.use(multer({storage:storage,fileFilter:filefilter }).array('image'))


const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',error =>console.log(error,'aslam'))
db.once('open',()=>console.log('db is connected'))


app.use('/', productRouter)



app.listen(process.env.PORT)
console.log(`port is connected to ${process.env.PORT}`);