const mongoose = require('mongoose')
//const Author = require('./author')
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'Author'
    }
})
const Book =  mongoose.model('Book',bookSchema)
module.exports = Book