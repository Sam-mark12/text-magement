import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-7 bg-white text-black">
    <div className="flex items-center">
      <button  className="mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <img className="h-8 w-8 mr-2" src='src/app.png' alt='App logo' />
      <span className="text-2xl font-bold">TASK MANAGEMENT</span>
    </div>
  </nav>
  )
}

export default Navbar

