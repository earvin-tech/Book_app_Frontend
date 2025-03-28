import React, { useEffect, useState } from 'react';

function BookDescription() {
    const [bookData, setBookData] = useState(null);
    const [reviews, setReviews] = useState([]);

    // Function to fetch book data
    const fetchBookData = async () => {
        try {
            const response = await fetch('https://book-application-d96a.onrender.com/books/bookId'); // Update 'bookId' with actual ID
            const data = await response.json();
            if (response.ok) {
                setBookData(data);
                setReviews(data.reviews); // Assuming 'reviews' is part of the book data
            } else {
                throw new Error(data.message || "Unable to fetch book data");
            }
        } catch (error) {
            console.error("Fetching book data failed:", error);
        }
    };

    useEffect(() => {
        fetchBookData();
    }, []);

    return (
        <div className="book-description">
            {bookData ? (
                <>
                    <h1>{bookData.title}</h1>
                    <h2>by {bookData.author}</h2>
                    <p>{bookData.description}</p>
                    <div className="reviews">
                        <h3>Reviews</h3>
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p><strong>{review.author}</strong> rated it {review.rating}/5</p>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading book details...</p>
            )}
        </div>
    );
}

export default BookDescription;
