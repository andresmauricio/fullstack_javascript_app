const { Router } = require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => { 
    const books = await Book.find();    
    res.json(books)    
});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
    const newBook = new Book({title, author, isbn});
    await newBook.save();
    res.json(newBook);
});

router.delete('/:id', async (req, res) => {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.json({result: true, bookDeleted: deleteBook});
});

module.exports = router;