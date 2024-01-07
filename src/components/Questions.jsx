import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import Question from './Question'

function Questions({questions,dispatch,answer,index,state,remainingTime}) {

    function handleClick(){
        dispatch({type:'nextQuestion', payload: index+1})
    }

    const min = Math.floor( remainingTime/60 );
    const second = remainingTime % 60;

    useEffect(()=>{
        const interval=setInterval(()=>{
            dispatch({type:'timer'})
        },1000)

        // cleaning
        return ()=>{clearInterval(interval)}
    },[dispatch])

  return (
    <div className='flex flex-col gap-4 items-center text-white w-6/12 my-6'>
        <Question question={questions[index]} answer={answer} dispatch={dispatch}/>
        <div className='flex justify-between w-full'>
            <div className='px-6 py-2 rounded-full bg-[#414141]'>
                <p>{min <10 ? "0" : ""}{min} : {second <10 ? "0" : ""}{second}</p>
            </div>

        { answer !=='' ? 
            index===14 ?(
                <button 
                    onClick={()=>dispatch({type:'quizOver', payload:state.points > state.highScore ? state.points : state.highScore})}
                    className='px-6 py-2 bg-[#414141] hover:bg-transparent border-2 border-[#414141]
                    transition-all duration-500 rounded-full font-bold text-white w-[10rem]'>
                    Finish test
                </button>
            ):
            
           <button 
                onClick={handleClick}
                className='px-6 py-2 bg-[#414141] hover:bg-transparent border-2 border-[#414141]
                 transition-all duration-500 rounded-full font-bold text-white w-[10rem]'>
                Next
            </button> :
             ""
        }
        </div>
    </div>

  )
}

export default Questions