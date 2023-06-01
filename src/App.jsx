import React from 'react'
import Landing from './pages/Landing'
import "./App.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Classification from './pages/Classification'
import Profile from './pages/Profile'
import Social from './pages/Social'
import About from './pages/About'
import Faq from './pages/Faq'

const App = () => {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/classification' element={<Classification />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/social' element={<Social />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<Faq />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default App