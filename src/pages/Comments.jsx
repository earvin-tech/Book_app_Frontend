import React, { useEffect, useState } from 'react';
import "../styles/Comments.css";

function Comments() {
    const [bookDetails, setBookDetails] = useState({
        title: "The Book of Frank",
        author: "Ica Cornell",
        currentPage: 127,
        totalPages: 176,
        progress: 72,
        likes: 12,
        comments: [
            { author: "Jane Doe", text: "Absolutely loved this book! Can't wait for you to finish." },
            { author: "Phoebe Smith", text: "Are you still reading this book? Didn't you just get it yesterday?!" },
            { author: "John Smith", text: "I'm on chapter 10! Let me know how you enjoy the ending." }
        ]
    });

    // Function to fetch book details and comments
    const fetchBookDetails = async () => {
        try {
            const response = await fetch('https://book-application-d96a.onrender.com/comments/bookId'); // Adjust this endpoint as needed
            const data = await response.json();
            if (response.ok) {
                setBookDetails(data);
            } else {
                throw new Error(data.message || "Unable to fetch book details");
            }
        } catch (error) {
            console.error("Fetching book details failed:", error);
        }
    };

    useEffect(() => {
        fetchBookDetails();
    }, []);

    return (
        <div className="comments-page">
            <h1>{bookDetails.title}</h1>
            <h2>by {bookDetails.author}</h2>
            <p>{bookDetails.author} is on page {bookDetails.currentPage} of {bookDetails.totalPages}</p>
            <div className="progress-bar" style={{ width: `${bookDetails.progress}%` }}></div>
            <div>
                <span>{bookDetails.likes} Likes</span>
                <span>{bookDetails.comments.length} Comments</span>
            </div>
            <div>
                {bookDetails.comments.map((comment, index) => (
                    <div key={index}>
                        <strong>{comment.author}</strong>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
