import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login, signup } from '../../../firebase'


const Login = () => {

  const [siginState, setSigninState] = useState("Belépés")

  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const user_auth = async (event) => {
    event.preventDefault()
    if (siginState === "Belépés") {
      await login(email, password)
    } else {
      await signup(name,email,password)
    }
  }




  return (
    <div className='login'>
      <img className='login-logo' src={logo}/>
      <div className="login-form">
        <h1>{siginState}</h1>
        <form>

          {siginState === "Regisztráció" ? <input 
          value={name}
          onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Teljes Név'/>: <></>}
          <input
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
           type="email" placeholder='Email'/>
          <input
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
           type="password" placeholder='Jelszó'/>
          <button
          onClick={user_auth}
          type='submit'
          >{siginState}</button>
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
