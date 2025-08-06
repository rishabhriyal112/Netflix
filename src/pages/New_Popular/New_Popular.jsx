import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TitleCards from '../../components/TitleCards/TitleCards';
import "./New_Popular.css";

const New_Popular = () => {
  return (
    <div className="new-page">
      {/* ✅ Navbar */}
      <Navbar />

      <div className="new-hero">
        {/* ✅ Page Header */}
        <div className="new-header">
          <h1>New & Popular</h1>
          <p>Explore New Popular Movies & TV Shows.</p>
        </div>
        <div className='new-sections'>
          <TitleCards title="All " category="top_rated"   />
          <TitleCards title="Trending Movies" isTrending={true} showType="movie" />
          <TitleCards title="Trending TV Shows" isTrending={true} showType="tv" />
          
        </div>


      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default New_Popular;
