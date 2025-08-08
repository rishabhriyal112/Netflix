import React, { useState } from "react";
import "./SearchBar.css";
import search_icon from "../../assets/search_icon.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 🔑 TMDB Bearer token
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
  };

  // 🔎 Fetch movies when hitting Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
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
      {/* 🔍 Search Icon */}
      

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <img src={search_icon} alt="Search Icon" className="search-icon" />
      
      {/* 🔽 Dropdown results */}
      {results.length > 0 && (
        <div className="search-results">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="search-item"
              // ✅ Opens TMDB page for that movie
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank"
                )
              }
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
