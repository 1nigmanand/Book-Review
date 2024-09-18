const Book = require("../models/bookModel");

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.status(200).json(books);     // Return the books in the response
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books' }); // Handle errors
  }
};

// Get a single book by ID
exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Fetch book by ID
    if (!book) {
      return res.status(404).json({ message: 'Book not found' }); // Handle book not found
    }
    res.status(200).json(book); // Return the book details
  } catch (error) {
    console.error('Error fetching book details:', error);
    res.status(500).json({ message: 'Error fetching book details' }); // Handle errors
  }
};
