import React from 'react'
import Landing from './pages/Landing'
import "./App.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import FoodChoice from './pages/FoodChoice'
import WhyFSG from './pages/WhyFSG'
import Social from './pages/Social'
import About from './pages/About'
import Faq from './pages/Faq'

const App = () => {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/foodchoice' element={<FoodChoice />} />
      <Route path='/fsg' element={<WhyFSG />} />
      <Route path='/social' element={<Social />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<Faq />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default App