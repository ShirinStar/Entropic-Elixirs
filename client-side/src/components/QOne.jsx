import React, { useState } from 'react';

function QOne(props) {
 const { handleNext } = props
// const [ answer_antropy, setAnswer_antropy ] = React.useState('');
// const [ answer_flow, setAnswer_flow ] = React.useState('');
// const [ answer_openness, setAnswer_openness ] = React.useState('');

 const handleMsg = () => {
  const form = document.querySelector('form');
  const textEl = document.createElement('p');
  textEl.classList.add('textEl');
  textEl.innerText = "*incomplete answer"
  form.appendChild(textEl);
  const elsToDelete = setTimeout(() => {
    form.removeChild(textEl);
  },2500)
}

 const handleSubmit = async (e) => {
  e.preventDefault()
  const submit = handleNext;
  const input = document.querySelector('input[type=radio]');
  if(input.checked == false) {
    handleMsg()
  } else {
   submit(userInfo);
 }
}

return (
 <>
  <div className='div-title'>
    <h1 className='general-title'>Quesion no.1</h1>
   </div>

   <div className='main-q'>
    <h2 className='q-title'>In the past six months, how much work have you done on your relationship with yourself?</h2>
    <form className='form-q'onSubmit={handleSubmit}>
      <input type="radio"/> This is something I never think about<br />
      <input type="radio"/> I think about doing work on myself sometimes, but what for?<br />
      <input type="radio"/> I want to do work on myself, but I don’t know how<br />
      <input type="radio"/> I do work on myself often, but wouldn’t say it’s a central focus of my life<br />
      <input type="radio"/> Working on myself is something I spend considerable time and resources on (either by myself or with the support of others)<br />
      <button className='btn' type='submit'>Next</button>
    </form>
    </div>
 </>
 );
};
export default QOne;
