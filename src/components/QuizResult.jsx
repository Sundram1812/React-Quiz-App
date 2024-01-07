import React from 'react'

function QuizResult({totalScore,dispatch,highScore,maxPoints}) {

  const percent=Math.ceil((totalScore/ maxPoints)*100)
  let emoji;

  if(percent ===100) emoji="🏅"
  if(percent < 100 && percent >80 ) emoji="🎉"
  if(percent < 80 && percent >50 ) emoji="😊"
  if(percent < 50 && percent >0 ) emoji="🤔"
  if(percent ===0 ) emoji="🤽"


  return (
    <div className='flex flex-col items-center gap-5 my-6 justify-center text-white '>
        <p className='font-bold text-[1.5em] bg-orange-600 rounded-full px-6 py-2'>
         {emoji} You Scored {totalScore} out of {maxPoints} ({percent}%)</p>
        <p className='font-bold'>HighScore : {highScore}</p>

      <div className='flex justify-between items-center w-full'>

          <button 
            onClick={()=>dispatch({type:'quitQuiz'})}
            className='px-6 py-2 bg-[#414141] hover:bg-transparent border-2 border-[#414141] transition-all duration-500 rounded-full font-bold text-white w-[10rem]'>
            Quit Quiz
          </button>

          <button 
            onClick={()=>dispatch({type:'restart'})}
            className='px-6 py-2 bg-[#414141] hover:bg-transparent border-2 border-[#414141] transition-all duration-500 rounded-full font-bold text-white w-[10rem]'>
            Restar Quiz
          </button>
            
      </div>
    </div>
  )
}

export default QuizResult