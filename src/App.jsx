import React, { useEffect } from 'react'
import Home from './components/pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import Player from './components/pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Belépés")
        navigate('/')
      }else {
        console.log("Kilépés")
        navigate('/login')
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
