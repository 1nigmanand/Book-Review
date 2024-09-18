import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../services/api';
import './HomePage.css';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(response => setBooks(response.data));
  }, []);

  return (
    <div className="container">
      <h2>Popular Books</h2>
      <div className="book-list">
        {books.map(book => (
          <div key={book._id} className="book-item">
            <img src={book.imageUrl} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`/book/${book._id}`}>
              <button>View Reviews</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
