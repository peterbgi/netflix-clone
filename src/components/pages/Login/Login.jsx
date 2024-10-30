import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'


const Login = () => {

  const [siginState, setSigninState] = useState("Belépés")




  return (
    <div className='login'>
      <img className='login-logo' src={logo}/>
      <div className="login-form">
        <h1>{siginState}</h1>
        <form>

          {siginState === "Regisztráció" ? <input type="text" placeholder='Teljes Név'/>: <></>}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Jelszó'/>
          <button>{siginState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label>Emlékezz rám</label>
            </div>
            <p>Segitségre szorulsz?</p>
          </div>
        </form>
        <div className="form-switch">
          {siginState === "Belépés" ? <p>Új vagy? <span
          onClick={() => {setSigninState("Regisztráció")}}>Regisztráció</span></p> : 
          <p>Van már fiókod? <span
          onClick={() => {setSigninState("Belépés")}}>Belépés</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
