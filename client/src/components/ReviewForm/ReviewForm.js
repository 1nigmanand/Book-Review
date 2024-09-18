import React, { useState } from 'react';
import { submitReview } from '../../services/api';

import './ReviewForm.css'; // Import CSS for styling

const ReviewForm = ({ bookId }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Assuming you have a function `submitReview` in your `api.js`
      await submitReview(bookId, { rating, comment: reviewText });
      setReviewText('');
      setRating(1);
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-form">
      <h3>Submit a Review</h3>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleReviewSubmit}>
        <label htmlFor="rating">Rating (1-5):</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          required
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
