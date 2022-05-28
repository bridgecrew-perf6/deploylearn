const express = require('express')
const router = express.Router()
const Book = require('../models/book')



router.post('/book', async(req,res)=>{
    const book = new Book(req.body)
    try{
        res.send(book)
        await book.save()
        
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router