'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {user} = useContext(AuthContext)
  return (
    <nav className='h-12.5 bg-primary flex justify-center'>
      {/* nav container */}
      <div className="w-full max-w-5xl text-white flex items-center justify-between">
        <Link to='/'>
          <span className='font-medium'>Booking.com</span>
        </Link>

        {/* nav items */}
        {user ? user.username : <div className="">
          <button className="ml-5 px-2.5 py-1 bg-white text-primary cursor-pointer rounded">Register</button>
          <button className="ml-5 px-2.5 py-1 bg-white text-primary cursor-pointer rounded">Login</button>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar
