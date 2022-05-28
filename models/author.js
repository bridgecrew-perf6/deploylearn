const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    }
})
const Author = new mongoose.model('Author',authorSchema)
module.exports=Author