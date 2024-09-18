const express = require('express');
const router = express.Router();
const Book = require('../models/bookmodel');  // Assumes you have a Book model
const Review = require('../models/reviewmodel');  // Assumes you have a Review model

// GET /books: Get the list of all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /books/:id: Get details of a specific book including all reviews
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate the ID format (assuming ObjectId for MongoDB)
  if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    console.log(`Received request for book ID: ${id}`);

    // Find the book by ID
    const book = await Book.findById(id);
    if (!book) {
      console.log('Book not found');
      return res.status(404).json({ message: 'Book not found' });
    }

    // Find reviews for the book
    const reviews = await Review.find({ book_id: book._id });
    console.log('Reviews found:', reviews);

    // Send the response
    res.json({ book, reviews });

  } catch (err) {
    // Log detailed error message
    console.error('Error occurred:', err);

    // Check for different error types and respond accordingly
    if (err.name === 'CastError') {
      // Handle invalid ID format errors
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Handle other unexpected errors
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});


// POST /books/:id/reviews: Submit a review for a specific book
router.post('/:id/reviews', async (req, res) => {
  const { rating, comment } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const review = new Review({
      book_id: book._id,
      rating: rating,
      comment: comment
    });

    await review.save();
    res.status(201).json({ message: 'Review submitted successfully', review });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
