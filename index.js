
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI).then((
    console.log('conneccted to mongoDB atlas')
)).catch(error=>{
    console.log('something wrong',error)
})

app.listen(PORT,()=>{
    console.log("server up at port",PORT)
})