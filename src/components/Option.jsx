import React from 'react'
import { useRef } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';



function Option({option,index,answer,dispatch,correctOpt,handlePoint}) {

    // if(index===answer) {console.log("true")} else{console.log("false");}
 
    return (
        <div className='w-full focus:translate-x-5'>
            <button 
            disabled={answer !==''}
            onClick={()=>dispatch({type:'setAnswer', payload:index})} 
            className={`${ answer !=='' ? index===correctOpt ? "bg-green-700  ": "bg-orange-700  " : "" } 
            bg-[#414141] transition-all duration-500 font-bold py-2 px-6  rounded-3xl w-full cursor-pointer
            ${answer !=='' && index===answer  ?"disabled:translate-x-5 " :""}
            ${answer ==='' ?"hover:translate-x-5" :""}`}
            >
                {option}
            </button>
        </div>
    )
}

export default Option


