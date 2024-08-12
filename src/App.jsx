// react, components, staticos
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question.jsx'
import GameOver from './components/GameOver.jsx'
import PickCategory from './components/PickCategory.jsx'

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
      <div className='App'>
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome/> }
        {quizState.gameStage === "Category" && <PickCategory/> }
        {quizState.gameStage === "Playing" && <Question/> }
        {quizState.gameStage === "End" && <GameOver/> }
      </div>
    </>
  )
}

export default App
