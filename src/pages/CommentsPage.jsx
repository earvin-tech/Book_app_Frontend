import React, { useState } from "react";
import "./CommentsPage.css";

const CommentItem = ({ username, comment, rating }) => {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <span className="comment-username">{username}</span>
        {rating && (
          <div className="comment-rating">
            ⭐⭐⭐⭐⭐ {rating} stars
          </div>
        )}
      </div>
      <p className="comment-text">{comment}</p>
    </div>
  );
};

const CommentPage = () => {
  const [comments, setComments] = useState([
    {
      id: "1",
      username: "Jane Doe",
      comment: "I absoloutely loved this book! Cant wait for you to finish so we can discuss THAT twist!",
      rating: 5,
    },
    {
      id: "2",
      username: "Phoebe Smith",
      comment: "You are powering through this book! I thought you just get this yesterday???.",
      rating: 3,
    },
    {
      id: "3",
      username: "Emily Johnson",
      comment: "Great book! Highly recommend it to anyone who loves mystery novels.",
      rating: 4,
    },
    {
        id: "4",
        username: "John Doe",
        comment: "This is on my TBR!!",
        rating: N/A,
      },
  ]);

  return (
    <div className="comment-page">
      <h1>Comments</h1>
      <div className="comment-list">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => <CommentItem key={comment.id} {...comment} />)
        )}
      </div>
    </div>
  );
};

export default CommentPage;