const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/bookmodel');  // Make sure the path is correct

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  });

// Sample book data to seed the database
const seedBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream and the roaring 1920s.',
    imageUrl: 'https://example.com/gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A story of racial injustice in the Deep South.',
    imageUrl: 'https://example.com/mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel about totalitarianism and surveillance.',
    imageUrl: 'https://example.com/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A classic novel about love and societal expectations.',
    imageUrl: 'https://example.com/pride.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A fantasy adventure preceding the events of The Lord of the Rings.',
    imageUrl: 'https://example.com/hobbit.jpg'
  }
];

// Function to seed the database
const seedDB = async () => {
  try {
    // Remove all existing books
    await Book.deleteMany({});
    console.log('All books removed');

    // Insert the seed books
    await Book.insertMany(seedBooks);
    console.log('Database seeded with books');
    
    // Close the database connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding the database', err);
    mongoose.connection.close();
  }
};

// Run the seed function
seedDB();
