import React from 'react'

const Footer = () => {
  return (
    <div className='shadow-md mt-auto bg-gray-900 h-16 flex items-center justify-center text-white text-xl'>{(new Date().getFullYear())} &copy; Food Scan Genius</div>
  )
}

export default Footer