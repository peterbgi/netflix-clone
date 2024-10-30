import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} className='cation-img'/>
          <p>A modern Isztambulban élő fiatalember felfedezi kapcsolatait egy titkos, 
            ősi renddel, hogy megmentse a várost egy halhatatlan ellenségtől.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="lejátszás"/>Lejátszás</button>
            <button className='btn dark-btn'><img src={info_icon} alt="lejátszás"/>Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Kasszasiker"} category={"top_rated"}/>
        <TitleCards title={"Csak a Netflixen"} category={"popular"}/>
        <TitleCards title={"Hamarosan a kínálatban"} category={"upcoming"} />
        <TitleCards title={"Neked ajánlott"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
    
  )
}

export default Home
