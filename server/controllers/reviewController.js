const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

// Submit a new review for a specific book
exports.submitReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Check if the book exists
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Create and save a new review
    const review = new Review({
      bookId: req.params.id,
      rating,
      comment,
    });
    
    await review.save(); // Save review to the database

    res.status(201).json({
      message: 'Review submitted successfully',
      review,
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ message: 'Error submitting review' });
  }
};
