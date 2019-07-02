import React, { useState, useEffect } from 'react';
import questions from './questionsList';

function Questions(props) {
const {handleNext, userAnswers} = props
const [answers, setAnswers] = React.useState({
  'answer_breaking': 0,
  'answer_building': 0,
  'answer_with_it': 0,
  'answer_against_it': 0,
  'answer_intuition': 0,
  'answer_intention': 0
});

 const handleSubmit = async (e) => {
  e.preventDefault()
  const input = document.querySelector('input[name="answer"]:checked');
  const answerIndex = parseInt(input.getAttribute("data-answer-index"));
  let updateAnswer = answers;
  questions.questions[0].answers[answerIndex].scores.forEach((score) => {
    updateAnswer = {
      ...updateAnswer,
      [score.catagory] : updateAnswer[score.catagory] + parseInt(score.value)
    }
  })
 //  const userAnswers = {
 //    ...answers,
 //    [input.getAttribute("data-catagory")] : parseInt(input.value)
 // }
 console.log(updateAnswer, 'from line29');
  // const increamentAnswer = userAnswers + userAnswers;
  // console.log(increamentAnswer);
 //  setAnswers(userAnswers)
 //  const submit = handleNext;
 //   submit(userAnswers);
 }

 // console.log(answers, 'line27');

 return (
  <>
   <div className='div-title'>
    <h1 className='general-title'>Quesion {questions.questions[0].number}</h1>
   </div>

   <div>
    <h2>{questions.questions[0].title}</h2>
   </div>

  <div>
   <form className='form-q' onSubmit={handleSubmit}>
  {
   questions.questions[0].answers.map((answer, index) => {
     return (
      <div key={answer.text}>
       <input data-answer-index={index} data-catagory={answer.scores.catagory} value={answer.scores.value} type='radio' name='answer' required/>
        {answer.text}
      </div>
     )
    })
   }
    <button className='btn' type='submit'>Next</button>
   </form>

  </div>

  </>
  );
 };

export default Questions;
