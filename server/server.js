const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Import routes
const bookRoutes = require('./routes/bookroutes');  // Check the path and filename
const reviewRoutes = require('./routes/reviewroutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());               // Enable CORS for cross-origin requests
app.use(express.json());        // Parse incoming JSON requests

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1); // Exit the process if the database connection fails
  }
};
connectDB();

// Routes
app.use('/api/books', bookRoutes);      // Book-related routes
app.use('/api/reviews', reviewRoutes);  // Review-related routes

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
