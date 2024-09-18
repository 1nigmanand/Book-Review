import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000/api';
//
// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Fetch details of a single book by its ID
export const fetchBookDetails = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${bookId}`);
    return response;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};

export const submitReview = async (bookId, reviewData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reviews/${bookId}`, reviewData);
      return response;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  };
