import React, { useState, useEffect } from 'react';
import questions from './questionsList';

function QOne(props) {
const { handleNext, userAnswers } = props
const [ answers, setAnswers ] = React.useState({
  'answer_breaking': 0,
  'answer_building': 0,
  'answer_with_it': 0,
  'answer_against_it': 0,
  'answer_intuition': 0,
  'answer_intention': 0
});


 const handleSubmit = async (e) => {
  e.preventDefault()
  const submit = handleNext;
  const input = document.querySelector('input[name="answer"]:checked');
  console.log(input);
   submit(input);
 }

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
   questions.questions[0].answers.map(answer => {
     return (
      <div key={answer.text}>
       <input data-catagory={answer.catagory} type='radio' name='answer' value={answer.value}
        required/>
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

export default QOne;
