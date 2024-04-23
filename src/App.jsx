import React from 'react'
import MainPage from './components/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import ProfilePage from './components/ProfilePage'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profilepage" element={<ProfilePage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
