import { useReducer } from 'react'
import { useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import Loader from './components/Loader'
import Questions from './components/Questions'
import Slider from './components/Slider'
import StartScreen from './components/StartScreen'
import questions, { question } from './questions'
import Error from './components/Error'
import QuizResult from './components/QuizResult'

const SECS_PER_QUESTION=30;

const initialState={
  questions:[], 
  // loading, ready , error, active, finished
  status:'loading',
  index:0,  
  answer:'',
  quit:1,
  points:0,
  highScore:0,
  remainingTime:null,
}

function reducer(state,action){
    switch(action.type){
      case 'setQuestion':
        return {
          ...state, 
          questions: action.payload,
          status: 'ready',
          // remainingTime:state.questions.length * SECS_PER_QUESTION,
        }

      case 'setLoading':
        return {
          ...state,
          loadding:action.payload
        }  

      case 'faildLoadingQuestion':
        return {
          ...state,
          status:'error'
        }

      case 'start':
        return{
          ...state,
          status:'active',
          remainingTime:state.questions.length * SECS_PER_QUESTION,
        }
      case 'timer':
        return{
          ...state,
          remainingTime:state.remainingTime-1,
          status: state.remainingTime ===0 ? "finished" : state.status,
        }  

      case 'setAnswer':
        const question=state.questions.at(state.index);
        return {
          ...state,
          answer:action.payload,
          points: action.payload===question.correctOption ? state.points + question.points : state.points,
        }
        
      case 'nextQuestion':
        return {
          ...state, 
          index: action.payload,
          answer:'',
        }

      case 'quizOver':
        return{
          ...state,
          status:'finished',
          highScore:action.payload
        }  

      case 'restart':
        return {
          // ...initialState,
          // restart: state.restart+1,
          ...state,
          answer:'',
          status:'active',
          index:0,
          points:0,
          remainingTime:state.questions.length * SECS_PER_QUESTION,
        }  

        case 'quitQuiz':
          return{
            ...initialState,
            quit:state.quit+1,
          }

        default: 
          throw new Error("Unknown Action")
    }
}

function App() {

  const [state,dispatch]=useReducer(reducer,initialState)

  const {status,questions,answer,index,points,highScore,quit,remainingTime}=state;
  console.log(points)

  const maxPoints=questions.map((question)=>question.points).reduce((accu,curr)=>accu+curr,0);


  useEffect(()=>{
    async function getQuestions(){
      try {
        const res=await fetch('http://localhost:8000/questions');
        const data=await res.json();
        // console.log(data);
        dispatch({type:'setQuestion', payload:data})
      } catch (error) {
        dispatch({type:'faildLoadingQuestion'})
      }
    }

    getQuestions();
  },[quit])

  // console.log(state.questions)

  return (
    <div className='w-10/12 mx-auto flex flex-col items-center justify-center'>
      <Header />         
      {status==="loading" && <Loader/> }
      {status==="ready" && <StartScreen questions={questions} dispatch={dispatch}/>}
      {status==='active' && <Slider state={state} points={points} maxPoints={maxPoints}/>}
      {status==='active' && <Questions questions={questions} dispatch={dispatch} answer={answer} index={index} state={state} remainingTime={remainingTime}/>}
      {status==="error" && <Error/>}
      {status==='finished' && <QuizResult totalScore={points} dispatch={dispatch} highScore={highScore} maxPoints={maxPoints}/>}
    </div>
  )
}

export default App
