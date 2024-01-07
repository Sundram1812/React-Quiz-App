import React from 'react'
import '../App.css'

function Loader() {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className="custom-loader"></div>
        <p className='text-[1.2em] font-semibold text-white'>Loading Question...</p>
    </div>
  )
}

export default Loader