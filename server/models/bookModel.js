const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the Book model
module.exports = mongoose.model('Book', bookSchema);
