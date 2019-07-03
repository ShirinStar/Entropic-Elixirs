import React, { useState } from 'react';
import questions from './questionsList';

function Questions(props) {
const {handleSubmit, urlId, handleNext} = props
const [questionId, setQuestionId] = React.useState(0); // question ->url
const [answers, setAnswers] = React.useState({
  'answer_breaking': 0,
  'answer_building': 0,
  'answer_with_it': 0,
  'answer_against_it': 0,
  'answer_intuition': 0,
  'answer_intention': 0
});

 const onSubmit = (e) => {
  e.preventDefault()
  const input = document.querySelector('input[name="answer"]:checked');
  const answerIndex = parseInt(input.getAttribute("data-answer-index"));
  let newAnswers = answers;
  questions.questions[questionId].answers[answerIndex].scores.forEach((score) => {
    newAnswers = {
      ...newAnswers,
      [score.catagory] : newAnswers[score.catagory] + parseInt(score.value)
    }
  })
  const submit = handleSubmit
  setAnswers(newAnswers)
   submit(newAnswers);
 }

 const incrementQuestion = () => {
   let increment = 1;
   setQuestionId(questionId + increment);
   console.log(questionId);
   const submit = handleSubmit
   submit(urlId)

   // if(questionId <= 13) {
    // until questionId == 13
  // } else props.history.push('/intake');
 }

 console.log('rendering questionId from line36', questionId, 'current answers', answers);

 return (
  <>
   <div className='div-title'>
    <h1 className='general-title'>Quesion no. {questions.questions[questionId].number}</h1>
   </div>

   <div>
    <h2>{questions.questions[questionId].title}</h2>
   </div>

  <div>
   <form className='form-q' onSubmit={handleSubmit}>
  {
   questions.questions[questionId].answers.map((answer, index) => {
     return (
      <div key={answer.text}>
       <input data-answer-index={index} data-catagory={answer.scores.catagory} value={answer.scores.value} type='radio' name='answer' required/>
        {answer.text}
      </div>
     )
    })
   }
    <button className='btn' type='submit' onClick={incrementQuestion}>Next</button>
   </form>

  </div>

  </>
  );
 };

export default Questions;
