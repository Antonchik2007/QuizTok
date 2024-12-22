import React from "react";
import './../styles/CardAnswerOption.css'

const CardAnswerOption = ({answerNumber, answerText}) => {
    return(
        <div className="card-answer-option">
            <div className="select-answer-button-wrapper">
                <button className='select-answer-button'>Answer {answerNumber}</button>
            </div>
            
            <div className="answer-text-wrapper">
                <p className='answer-text'>{answerText}</p>
            </div>
        </div>
    )
}

export default CardAnswerOption;