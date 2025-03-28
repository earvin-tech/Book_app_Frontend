import React from "react";
import "./DiscoverPage.css";

const BookItem = ({ title, author, rating, description }) => {
  return (
    <div className="book-item">
      <div className="book-cover"></div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <span className="book-author">by {author}</span>
        {rating && (
          <div className="book-rating">
            ⭐⭐⭐⭐⭐ {rating} stars
          </div>
        )}
        <p className="book-description">{description}</p>
        <button className="discover-btn">Discover More</button>
      </div>
    </div>
  );
};

const DiscoverPage = () => {
  const popularBooks = [
    {
      id: "1",
      title: "The Seven Husbands of Evelyn Hugo ",
      author: "Taylor Jenkins Reid",
      rating: 5,
      description:
        " A stunning love story of a Hollywood starlet and the people she leaves behind.",
    },
    {
      id: "2",
      title: "1984 ",
      author: "George Orwell" ,
      rating: 4,
      description: "A dystopian novel about totalitarian regime and surveillance.",
    },
    {
      id: "3",
      title: "The Great Gatsby ",
      author: "F. Scott Fitzgerald ",
      rating: 4.5,
      description:
        " A classic American novel of the Jazz Age, capturing the roaring twenties.",
    },
  ];

  const newReleases = [
    {
      id: "4",
      title: "The Midnight Library ",
      author: " Matt Haig",
      rating: 4.8,
      description:
        " A beautiful story about second chances and finding meaning in life.",
    },
    {
      id: "5",
      title: " The Invisible Life of Addie LaRue",
      author: " V.E. Schwab",
      rating: 5,
      description:
        " A tale of a woman who makes a Faustian bargain to live forever but is forgotten by everyone she meets.",
    },
    {
      id: "6",
      title: "Project Hail Mary ",
      author: "Andy Weir ",
      rating: 4.7,
      description:
        " A gripping science fiction novel about a lone astronaut's mission to save Earth.",
    },
  ];

  return (
    <div className="discover-page">
      {/* Header Section */}
      <header className="header">
        <h1>Discover Books</h1>
      </header>

      <section className="book-section">
        <h2>Popular This Month</h2>
        <div className="book-list">
          {popularBooks.length === 0 ? (
            <p>No popular books this month.</p>
          ) : (
            popularBooks.map((book) => <BookItem key={book.id} {...book} />)
          )}
        </div>
      </section>
      <section className="book-section">
        <h2>New Releases</h2>
        <div className="book-list">
          {newReleases.length === 0 ? (
            <p>No new releases available.</p>
          ) : (
            newReleases.map((book) => <BookItem key={book.id} {...book} />)
          )}
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Book App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DiscoverPage;