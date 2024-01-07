import React from 'react'

function Slider({state,points,maxPoints}) {
  return (
    <div className='flex flex-col gap-2 my-4 text-white w-6/12 transition-all duration-700'>
        <input 
          type="range" 
          value={state.index+1}
          onChange={()=>{}}
          name="" 
          min={1} 
          max={15}  
          id="" 
        />

        <div className='flex justify-between items-center'>
            <p>Question {state.index+1}/{state.questions.length}</p>
            <p>{points}/{maxPoints} points</p>
        </div>
    </div>
  )
}

export default Slider