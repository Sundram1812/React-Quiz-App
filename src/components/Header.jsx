import React from 'react'
import reactLogo from '../assets/react.svg'

function Header() {
  return (
    <div className='flex  gap-5 my-6'>
        <img src={reactLogo} className="logo react w-[90px]" alt="React logo" />
        <p className='text-white text-[4em] tracking-[6px] font-codyStar font-extrabold'>THE REACT QUIZ</p>
    </div>
  )
}

export default Header