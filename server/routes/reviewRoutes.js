const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');  // Assumes you have a Book model
const Review = require('../models/reviewModel');// Import Book model
// GET /api/reviews/:bookId - Get all reviews for a specific book
router.get('/:bookId', async (req, res) => {
  const { bookId } = req.params;

  // Validate the bookId format (assuming ObjectId for MongoDB)
  if (!bookId || !/^[0-9a-fA-F]{24}$/.test(bookId)) {
    return res.status(400).json({ message: 'Book not found' });
  }

  try {
    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Fetch all reviews for the book
    const reviews = await Review.find({ book_id: bookId });
    res.json(reviews);

  } catch (err) {
    console.error('Error fetching reviews:', err.message);
    res.status(500).json({ message: 'An error occurred while fetching reviews' });
  }
});

// POST /api/reviews/:bookId - Submit a new review for a specific book
router.post('/:bookId', async (req, res) => {
  const { rating, comment } = req.body;
  const { bookId } = req.params;

  // Validate input
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
  }

  if (typeof comment !== 'string' || comment.trim().length === 0) {
    return res.status(400).json({ message: 'Comment must be a non-empty string' });
  }

  // Validate the bookId format (assuming ObjectId for MongoDB)
  if (!bookId || !/^[0-9a-fA-F]{24}$/.test(bookId)) {
    return res.status(400).json({ message: 'Book not found' });
  }

  try {
    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Create a new review
    const review = new Review({
      book_id: bookId,
      rating,
      comment
    });

    // Save the review to the database
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully', review });

  } catch (err) {
    console.error('Error submitting review:', err.message);
    res.status(500).json({ message: 'An error occurred while submitting the review' });
  }
});


module.exports = router;
