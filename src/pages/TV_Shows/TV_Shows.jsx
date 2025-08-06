import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleCards from "../../components/TitleCards/TitleCards";
import "./TV_Shows.css";

const TV_Shows = () => {
  return (
    <div className="tv-page">
      {/* ✅ Navbar */}
      <Navbar />
      <div className="tv-hero">
  {/* ✅ Page Header */}
      <div className="tv-header">
        <h1>TV Shows</h1>
        <p>Explore Top Rated & Trending TV Shows.</p>
      </div>

      {/* ✅ Movie Sections */}
      <div className="tv-sections">
        <TitleCards title={"Top Rated"} mediaType={"tv"} category={"top_rated"} />
        <TitleCards title={"Top TV Shows"} mediaType={"tv"} category={"airing_today"} />
        <TitleCards title={"On The Air"} mediaType={"tv"} category={"on_the_air"} />
      </div>
      </div>
    

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default TV_Shows;
