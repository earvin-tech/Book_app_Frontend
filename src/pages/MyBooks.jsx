import "../styles/MyBooks.css";

const MyBookItem = ({ title, author, action, rating, progress, isRead }) => {
    return (
      <div className="my-book-item">
        <div className="book-cover"></div>
        <div className="book-details">
          <span className="book-title">{title}</span>
          <span className="book-author">by {author}</span>
          <span className="book-action">{action}</span>
          {isRead && <div className="read-label">Read</div>}
          {rating && (
            <div className="book-rating">
              ⭐⭐⭐⭐⭐ {rating} stars
            </div>
          )}
  
          {progress && (
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <span className="progress-text">{progress}% completed</span>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const MyBooks = () => {
    const myBooks = [
      { id: "1", title: "The Seven Husbands of Evelyn Hugo ", author: " Taylor Jenkins Reid", action: " You gave", rating: 5, isRead: true },
      { id: "2", title: "1984 ", author: " George Orwell", action: " You added to your reading list", rating: 4 },
      { id: "3", title: "Moby Dick ", author: " Herman Melville", action: " Currently reading", progress: 72 },
    ];
  
    return (
      <div className="my-books-page">
        <h1>My Books</h1>
        <div className="my-books-list">
          {myBooks.length === 0 ? (
            <p>Uh Oh! You have not uploaded anything yet.</p>
          ) : (
            myBooks.map((book) => <MyBookItem key={book.id} {...book} />)
          )}
        </div>
      </div>
    );
  };
  
  export default MyBooks;