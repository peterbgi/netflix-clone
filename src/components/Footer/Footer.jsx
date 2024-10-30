import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon}/>
        <img src={twitter_icon}/>
        <img src={instagram_icon}/>
        <img src={facebook_icon}/>
      </div>
      <ul>
        <li>Audio commentár</li>
        <li>Segítségkérés</li>
        <li>Kártyák</li>
        <li>Média</li>
        <li>Támogatás</li>
        <li>Felhasználói csoportok</li>
        <li>Állások</li>
        <li>Jogi nyilatkozat</li>
        <li>Együttműködöi csapat</li>
        <li>Sütik</li>
        <li>Audio commentár</li>
        <li>Kapcsolat</li>
      </ul>
      <p className="copyright-text">1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
