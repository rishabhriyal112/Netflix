import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/Play_icon.png";
import info_icon from "../../assets/Info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";

const Home = () => {
  
  const [showVideo, setShowVideo] = useState(false);
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/80dqOwAOhbo?autoplay=1";

  // ✅ Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setShowVideo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  

  const handleClick = () => {
    window.open("https://www.imdb.com/title/tt7668518/", "_blank"); // Opens in a new tab
  };
  
  return (
    <div className="home">
      <Navbar />

      {/* ✅ Hero Section */}
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />

        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            Discover his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>

          {/* ✅ Hero Buttons */}
          <div className="hero-btns">
            <button
              className="btn text-black"
              onClick={() => setShowVideo(true)}
            >
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>

            <button onClick={handleClick}  className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>

          {/* ✅ First TitleCards wrapped for targeting */}
          <div className="title-cards-container">
            <TitleCards />
          </div>
        </div>
      </div>

      {/* ✅ More Cards Section */}
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"top_rated"} />
      </div>

      <Footer />

      {/* 🔥 Video Modal Overlay */}
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on iframe
          >
            <iframe
              src={youtubeEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setShowVideo(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
