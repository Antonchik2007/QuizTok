import React, {useEffect, useRef, useState} from "react";
import './../styles/CardAnswerOption.css'

const CardAnswerOption = ({answerNumber, answerText}) => {

    const answerTextRef = useRef(null);


    const [questionOption, setQuestionOption] = useState(' ')
   
    
    useEffect(() => {
      switch (answerNumber) {
        case 1:
          setQuestionOption('a)');
          break;
        case 2:
          setQuestionOption('b)');
          break;
        case 3:
          setQuestionOption('c)');
          break;
        case 4:
          setQuestionOption('d)');
          break;
        default:
          setQuestionOption('error'); // Optional default case
      }
      
      
    }, [answerNumber])

    useEffect(() => {
        const textLength = answerText.length
        let fontSize = '5rem' // Default font size
        let marginR = '10vw'
        if (textLength > 80) {
          fontSize = '2.5rem';
        } else if (textLength > 40) {
          fontSize = '3rem';
        } else if (textLength > 20) {
          fontSize = '4rem';
          marginR = '35vw';
        }else if (textLength < 20) {
          marginR = '25vw';
        }
    
        if (answerTextRef.current) {
          answerTextRef.current.style.fontSize = fontSize
          answerTextRef.current.style.marginRight = marginR
        }
      }, [answerText])

    return(
        <div className="card-answer-option">
            <div className="select-answer-button-wrapper">
                <button className='select-answer-button'>{questionOption}</button>
            </div>
            
            <div className="answer-text-wrapper">
                <p className='answer-text' ref={answerTextRef}>{answerText}</p>
            </div>
        </div>
    )
}

export default CardAnswerOption;