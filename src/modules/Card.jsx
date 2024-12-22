import React, {useState} from 'react'
import './../styles/Card.css'
import CardAnswerOption from './CardAnswerOption'

const Card = () => {

const [answers, setAnsewrs] = useState(['the rizzler', 'skibidi sigma', 'ohio baby gronk', 'freakbob'])

  return(
    <div className='card-outer-wrapper'>
      <div className="card-top">
        <div className="question-title">
          <div className="question-word-wrapper"><h2>Question</h2></div>
          <div className="question-wrapper">
            <p className='question-text'>Who founded the republic of Gilead</p>
          </div>
          
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-answer-options">
          {answers.map((answer, index) => {
            return <CardAnswerOption key={index} answerNumber={index + 1} answerText={answer}/>
          })} 
        </div>
      </div>
    </div>
  )
}

export default Card;