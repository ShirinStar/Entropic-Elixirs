import React, { useState, useEffect } from 'react';
import questions from './questionsList';

function QOne(props) {
const { handleNext, userAnswers } = props
const [ answer_breaking, setAnswer_breaking ] = React.useState('');
const [ answer_building, setAnswer_building ] = React.useState('');
const [ answer_with_it, setAnswer_with_it ] = React.useState('');
const [ answer_against_it, setAnswer_against_it ] = React.useState('');
const [ answer_intuition, setAnswer_intuition ] = React.useState('');
const [ answer_intention, setAnswer_intention ] = React.useState('');


 const handleSubmit = async (e) => {
  e.preventDefault()
  const submit = handleNext;
  const userAnswers= {
    Answer_breaking,
    Answer_building,
    Answer_with_it,
    Answer_against_it,
    Answer_intuition,
    Answer_intention
  }
   submit(userAnswers);
}

 // useEffect(async () => {
 //   const res = await ('./questions.js')
 //   console.log(res);
 // })

return (
  <div className='div-title'>
    <h1 className='general-title'>Quesion no.1</h1>

    <h2>{questions.title}</h2>

 </div>
   // <div className='main-q'>
   //  {questions.map(question => {
   //    <h2 className='q-title'>{question.title}</h2>//after this an audio src
   //    <form className='form-q'onSubmit={handleSubmit}>
   //    <input type="radio" name='question' value={text.value}
   //      required onChange={e => set`${catagory}`(e.target.value)}/>
   //    {answers.text}
   //    </div>
   //  })}
   //  <button className='btn' type='submit'>Next</button>

    // </form>
    // </div>
 );
};
export default QOne;
