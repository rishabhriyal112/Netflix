import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
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
    typeof: ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDkyZGJlM2VhZGRlOWE3YTZmZmRjZGI4Y2EwZTg2MiIsIm5iZiI6MTc1NDM5MDUwNi40ODcsInN1YiI6IjY4OTFkZmVhZjc0MTA0NTU2YTI2Mjg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI-LhPOhU09HkuBwvUkSxSNl4fQx5HEtl9zqiXSJT2k'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [id])

  return (
    <div>
    <Navbar/>
    
    <div className='player'>
      
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <br/> <br/> 
      <h1 className='info-item'>{` ${apiData.name}`}</h1>
      <br/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      
      <div className="player-info">
        <h1 className='info-item'>{`Date : ${apiData.published_at.slice(0, 10)}`}</h1>
        <h1 className='info-item'>{`Type : ${apiData.type}`}</h1>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Player
