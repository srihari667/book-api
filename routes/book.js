
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const book = new Book({ title, author, summary });
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (err) {
        res.status(500).json({ error: 'Could not create the book.' });
    }
});

// Get a list of all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve books.' });
    }
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve the book.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ error: 'Could not update the book.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
        } else {
            res.json({ message: 'Book deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Could not delete the book.' });
    }
});

module.exports = router;
