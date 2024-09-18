import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../services/api';
import ReviewForm from '../components/ReviewForm/ReviewForm';  // Remove curly braces
import ReviewList from '../components/ReviewList';  // Remove curly braces
import './BookDetailsPage.css';

function BookDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(data);
    

  useEffect(() => {
    fetchBookDetails(id).then(response => setData(response.data));
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container book-details">
      <div className="book-info">
        <img src={data.book.imageUrl} alt={data.book.title} />
        <div className="book-meta">
          <h2>{data.book.title}</h2>
          <p><strong>Author:</strong> {data.book.author}</p>
          <p>{data.book.description}</p>
        </div>
      </div>

    <div className='review-container'>
      <ReviewForm bookId={id} />
      <ReviewList reviews={data.reviews} />
    </div>

      
    </div>
  );
}

export default BookDetailsPage;
