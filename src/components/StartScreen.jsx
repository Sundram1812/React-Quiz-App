import React from 'react'

function StartScreen({questions,dispatch}) {
  return (
    <div className='flex flex-col items-center text-white gap-2 my-8'>
        <h1 className='text-[1.5em] font-bold'>Welcome to The React Quiz!</h1>
        <p className='font-bold text-[1.4em]'>{questions.length} questions to test your React mastery</p>
        <button
        onClick={()=>dispatch({type:'start'})}
        className='hover:bg-[#414141] py-3 px-6 rounded-xl mt-2 border-2 font-bold
         border-[#414141] transition-all duration-500'
        >Let's start</button>
       
    </div>
  )
}

export default StartScreen