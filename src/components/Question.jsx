import React from 'react'
import Option from './option'

function Question({question,answer,dispatch}) {
    console.log(question)
    return (
        <div className='w-full flex flex-col gap-4'>
            <p className='text-[1.2em] font-bold'>{question?.question}</p>
            <div className='flex flex-col gap-3 w-full '>
                {
                    question.options.map((option,index)=>{
                        return <Option key={index} 
                                    index={index} 
                                    answer={answer} 
                                    option={option} 
                                    dispatch={dispatch} 
                                    correctOpt={question.correctOption}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default Question