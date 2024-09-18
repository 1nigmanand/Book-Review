const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());               // Enable CORS for cross-origin requests
app.use(express.json());        // Parse JSON request bodies

// Import Routes
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Use Routes
app.use('/api/books', bookRoutes);     // Routes for books (GET, GET by ID)
app.use('/api/reviews', reviewRoutes); // Routes for submitting reviews

module.exports = app;
