import React, { useState, useContext } from 'react';
import { BookContext } from './booksContext';
import Card from './Card';
import './Books.css';

function Books() {
  const { books } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const getAllGenres = () => {
    const genres = new Set();
    books.forEach((book) => {
      genres.add(book.genre);
    });
    return Array.from(genres);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre) ? prevGenres.filter((g) => g !== genre) : [...prevGenres, genre]
    );
  };

  const handleRatingChange = (rating) => {
    const roundedRating = Math.floor(rating); // Round off the rating
    setMinRating(roundedRating.toString());
  };

  const handleClearRating = () => {
    setMinRating('');
  };

  const filteredBooks = books.filter(
    (book) =>
      (searchTerm === '' || book.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (minPrice === '' || book.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || book.price <= parseFloat(maxPrice)) &&
      (minRating === '' || book.rating >= parseFloat(minRating)) &&
      (selectedGenres.length === 0 ||
        selectedGenres.some((g) => book.genre.toLowerCase().includes(g.toLowerCase())))
  );

  return (
    <div className="container">
      <div className="search-input mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="genres mb-3">
        <label>Genres:</label>
        <div className="form-check form-check-inline">
          {getAllGenres().map((genre) => (
            <div key={genre} className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <label className="form-check-label" htmlFor={genre}>
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="rating mb-3">
        <label>Rating:</label>
        <fieldset className="star-rating d-inline-block">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="star">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={minRating === rating.toString()}
                onChange={(e) => handleRatingChange(e.target.value)}
              />
              {rating}
            </label>
          ))}
          <button className="btn btn-secondary" onClick={handleClearRating}>
            Clear Rating
          </button>
        </fieldset>
      </div>

      <div className="price-range mb-3">
        <label>Price Range:</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="book-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-3 gy-3">
        {filteredBooks.map((book) => (
          <div className="card-container col" key={book.id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;