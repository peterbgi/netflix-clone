import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'

import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const [apiData, setApiData ] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTZlYTU2ZGI3ZTA5YTVlYjYxMWMyZWJlN2M5ODhjOSIsIm5iZiI6MTczMDI3ODY2Ni43NjU2MjMsInN1YiI6IjY3MWZiZGFjNmQ2YjcwNWRjODcxZjZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcdVpqeVxNjoNisywn2jSGxcGA40-uZpo2NBFz0ASd8'
    }
  };
  


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
 
  }),[]
  
 

  return (
    <div className='player'>
    <img
    onClick={() => {navigate(-2)}}
     src={back_arrow_icon}/>
    <iframe width={'90%'} height={'90%'}
    src={`https://www.youtube.com/embed/${apiData.key}`}
    title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
      <p>Megjelenés: {apiData.published_at.slice(0, 10)}</p>
      <p>Cím: {apiData.name}</p>
      <p>Kategoria: {apiData.type}</p>
    </div>
    
  </div>
  )
}

export default Player
