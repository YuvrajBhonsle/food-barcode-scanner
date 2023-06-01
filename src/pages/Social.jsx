import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Social = () => {
  return (
    <section className='flex flex-col justify-center items-center my-auto'>
      <div className='flex flex-col justify-center items-center mb-20'>
      <h1 className=' text-3xl font-semibold mb-2'>COMING SOON</h1>
      <p className='text-lg'>We're working hard to finish the development of this site.</p>
      <p className='text-lg mb-4'>Checkout the Scanner using the link below: </p>
      <Link to="/"><p className='bg-black rounded p-3 text-white hover:text-black hover:bg-gray-500'>Go To Scanner Page</p></Link>
      </div>

      <div className='flex'>
        <span className='mx-2 cursor-pointer bg-black text-white rounded-[50%] p-4 hover:bg-gray-500 hover:text-black'><FaFacebookF /></span>
        <span className='mx-2 cursor-pointer bg-black text-white rounded-[50%] p-4 hover:bg-gray-500 hover:text-black'><FaTwitter /></span>
        <span className='mx-2 cursor-pointer bg-black text-white rounded-[50%] p-4 hover:bg-gray-500 hover:text-black'><FaLinkedinIn /></span>
        <span className='mx-2 cursor-pointer bg-black text-white rounded-[50%] p-4 hover:bg-gray-500 hover:text-black'><FaInstagram /></span>
      </div>
    </section>
  )
}

export default Social