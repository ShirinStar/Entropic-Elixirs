import React, { useState, useEffect } from 'react';
import questions from './questionsList';
import { postAnswer} from '../services/apiHelper';

function Questions(props) {
const {handleNext, questionId} = props
const [answers, setAnswers] = React.useState({
  'breaking': 0,
  'building': 0,
  'with_it': 0,
  'against_it': 0,
  'intuition': 0,
  'intention': 0
});

 const handleSubmit = async (e) => {
  e.preventDefault()
  const input = document.querySelector('input[name="answer"]:checked');
  const answerIndex = parseInt(input.getAttribute("data-answer-index"));
  let newAnswers = answers;
  questions.questions[questionId].answers[answerIndex].scores.forEach((score) => {
    newAnswers = {
      ...newAnswers,
      [score.catagory] : newAnswers[score.catagory] + parseFloat(score.value)
    }
  })
  setAnswers(newAnswers);
  console.log(newAnswers, 'from questions');
  const submit = handleNext;
   submit(newAnswers);
 }

 return (
  <>
  <div className='form-container'>
  <div className='general-container'>
   <div className='div-title'>
    <h1 className='general-title'>Quesion no. {questions.questions[questionId].number}</h1>
   </div>

   <div>
    <h2 className='question-title'>{questions.questions[questionId].title}</h2>
   </div>

  <div className='radio-form'>
   <form className='form-q' onSubmit={handleSubmit}>
  {
   questions.questions[questionId].answers.map((answer, index) => {
     return (
      <div className='block-div' key={answer.text}>
       <input className='question-input' data-answer-index={index} data-catagory={answer.scores.catagory} value={answer.scores.value} type='radio' name='answer' required/>
        {answer.text}
      </div>
     )
    })
   }
    <button className='btn' type='submit'>Next</button>
   </form>

  </div>
  </div>
  </div>
  </>
  );
 };

export default Questions;
