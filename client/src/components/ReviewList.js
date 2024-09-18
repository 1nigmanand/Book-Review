const ReviewList = ({ reviews }) => {

  
  if (!reviews || !Array.isArray(reviews)) {
    return <p>No reviews available.</p>; // Handle the case where reviews is undefined
  }

  return (
    <div className="review-list">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p>Rating: {review.rating} / 5</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
