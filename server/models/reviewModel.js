const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Review Schema
const reviewSchema = new Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the Review Model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
