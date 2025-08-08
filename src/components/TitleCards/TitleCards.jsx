import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({
  title,
  category,
  mediaType = "movie",
  isTrending = false,
  showType = "all",
}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const url = isTrending
      ? `https://api.themoviedb.org/3/trending/${showType || "all"}/day?language=en-US`
      : `https://api.themoviedb.org/3/${mediaType || "movie"}/${category || "now_playing"}?language=en-US&page=1`;

    fetch(url, options)
      .then(response => response.json())
      .then(response => setApiData(response.results || []))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [isTrending, showType, mediaType, category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
              alt={card.title || card.name}
            />
            <p>{card.title || card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
