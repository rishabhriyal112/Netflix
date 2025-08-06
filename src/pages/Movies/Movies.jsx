// src/pages/Movies/Movies.jsx
import React from "react";
import "./Movies.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleCards from "../../components/TitleCards/TitleCards";

const Movies = () => {
  return (
    <div className="movies-page">
      {/* ✅ Navbar */}
      <Navbar />
      <div className="movies-hero">
  {/* ✅ Page Header */}
      <div className="movies-header">
        <h1>Movies</h1>
        <p>Explore blockbuster hits and trending movies.</p>
      </div>

      {/* ✅ Movie Sections */}
      <div className="movies-sections">
        <TitleCards title={"Top Rated Movies"} category={"top_rated"} />
        <TitleCards title={"Blockbuster Movies"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        
      </div>
      </div>
    

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Movies;
