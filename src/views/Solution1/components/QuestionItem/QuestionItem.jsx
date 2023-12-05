import React, {useState} from 'react'
import {iconPlus, iconMinus} from "../../../../const"
import "./QuestionItem.css";

const QuestionItem = ({question,handleQuestion}) => {
    // const [isActive, setIsActive] = useState(false)
  return (
    <li className="question-item">
        <div className="question-row">
            <h3 className="bold">{question.question}</h3>
            <button onClick={()=>handleQuestion(question)} className="icon-div">
    <img src={question.isActive ? iconMinus : iconPlus} alt="" />
            </button>
        </div>
            <div className={question.isActive ? "answer-div show-answer" : "answer-div"}>
            <h5 className="thin  answer-h5">
                {question.answer}
            </h5>
        </div>
    </li>
  )
}

export default QuestionItem