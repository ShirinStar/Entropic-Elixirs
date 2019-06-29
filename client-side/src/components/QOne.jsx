import React, { useState, useEffect } from 'react';
import questions from './questionsList';

function QOne(props) {
const { handleNext, userAnswers } = props
const [ answer_breaking, set_answer_breaking ] = React.useState('');
const [ answer_building, set_answer_building ] = React.useState('');
const [ answer_with_it, set_answer_with_it ] = React.useState('');
const [ answer_against_it, set_answer_against_it ] = React.useState('');
const [ answer_intuition, set_answer_intuition ] = React.useState('');
const [ answer_intention, set_answer_intention ] = React.useState('');


 const handleSubmit = async (e) => {
  e.preventDefault()
  const submit = handleNext;
  const userAnswers= {
    answer_breaking,
    answer_building,
    answer_with_it,
    answer_against_it,
    answer_intuition,
    answer_intention
  }
   submit(userAnswers);
}

return (
  <>
  <div className='div-title'>
    <h1 className='general-title'>Quesion no.1</h1>
  </div>
  <div>
    <h2>{questions.questions[0].title}</h2>
  </div>
  <div>
 {
   questions.questions[0].answers.map(answer => {
     return (
       <div key={answer.text}>
         <form className='form-q' onSubmit={handleSubmit}>
           <input type="radio" name='answer' value={answer.value}
            required onChange={e => set_`${answer.catagory}`(e.target.value)}/>
            {answer.text}
         </form>
       </div>
     )
   })
 }
 <button className='btn' type='submit'>Next</button>

</div>
</>
 );
};
export default QOne;
