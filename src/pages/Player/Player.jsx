import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  // Sanitize function to prevent XSS
  const sanitizeText = (text) => {
    if (!text) return "";
    return text.replace(/[<>"'&]/g, '');
  };
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results[0]) {
          setApiData(response.results[0]);
        }
      })
      .catch(err => console.error('API Error:', err));
  }, [id])

  return (
    <div>
    <Navbar/>
    
    <div className='player'>
      
      
      <br/> <br/> 
      <h1 className='info-item'>{sanitizeText(apiData.name)}</h1>
      <br/>
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${sanitizeText(apiData.key)}`} 
        title='trailer' 
        frameBorder='0' 
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      
      <div className="player-info">
        <h1 className='info-item'>Date: {sanitizeText(apiData.published_at?.slice(0, 10))}</h1>
        <h1 className='info-item'>Type: {sanitizeText(apiData.type)}</h1>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Player
