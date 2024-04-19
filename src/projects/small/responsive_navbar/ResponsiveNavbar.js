import React from 'react'
import logo from '../../../assets/logoes/vedic logo.png'

const ResponsiveNavbar = () => {
  return (
    <div className=' h-screen w-full'>
        <div className="w-full h-20 bg-blue-300 flex justify-between items-center">
        <div className="flex-shrink-0">
            <span className="text-gray-700"> <img src={logo} alt="logo" className='h-20' />  </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium">Easy Projects</a>
              <a href="#" className="text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium">Intermediate Projects</a>
              <a href="#" className="text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium">Large Projects</a>
            </div>
          </div>
          <div className="bg-blue-900 text-white mr-10 py-1 px-8 rounded-md cursor-pointer hover:bg-blue-700">Download CV</div>

        </div>
     
    </div>
  )
}

export default ResponsiveNavbar
