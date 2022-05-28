const express = require('express')
const router = express.Router()
const Book = require('../models/book')



router.post('/api/book', async(req,res)=>{
    const book = new Book(req.body)
    try{
        res.send(book)
        await book.save()
        
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/books',async(req,res) => {
    try{
        const books= await Book.find({})
     //   const token = await User.generateAuthToken()
        res.send(books)
    }catch (e) {
        res.status(400).send(e)
    }
    
})

module.exports = router