import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSelectMovie }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 🔑 TMDB Bearer token (from your snippet)
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDkyZGJlM2VhZGRlOWE3YTZmZmRjZGI4Y2EwZTg2MiIsIm5iZiI6MTc1NDM5MDUwNi40ODcsInN1YiI6IjY4OTFkZmVhZjc0MTA0NTU2YTI2Mjg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI-LhPOhU09HkuBwvUkSxSNl4fQx5HEtl9zqiXSJT2k",
    },
  };

  // 🔎 Fetch movies when hitting Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results || []))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* 🔽 Dropdown results */}
      {results.length > 0 && (
        <div className="search-results">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="search-item"
              onClick={() => onSelectMovie && onSelectMovie(movie.id)}
            >
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
