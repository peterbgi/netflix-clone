import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTZlYTU2ZGI3ZTA5YTVlYjYxMWMyZWJlN2M5ODhjOSIsIm5iZiI6MTczMDEzNTE0Mi45NjU5NzYsInN1YiI6IjY3MWZiZGFjNmQ2YjcwNWRjODcxZjZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVju7m_1v2bD9EGT6yQXpjOeBZcbCSC5fEpgiA0rZbw'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault;
    cardsRef.current.scollleft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category? category: "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    
    cardsRef.current.addEventListener('wheel', handleWheel)

  }, [])

  
  


  return (
    <div className='titlecards'>
    <h2>{title?title:"Népszerű"}</h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index) => {
        return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="film plakát" />
          <p>{card.original_title}</p>
        </Link>
      })}
    </div>
    </div>
  )
}

export default TitleCards
