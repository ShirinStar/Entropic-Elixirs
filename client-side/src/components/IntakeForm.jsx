import React, { useState } from 'react';

function IntakeForm(props) {
  const { handleRegister, userInfo } = props
  const [ user_age, setUser_age ] = React.useState('');
  const [ user_gender, setUser_gender ] = React.useState('');

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
    const submit = handleRegister;
    const userInfo = {
      user_age,
      user_gender
    }
    if(!user_age || !user_gender) {
      handleMsg()
    } else {
     submit(userInfo);
  }
}

return (
 <>
  <div className='div-title'>
   <h1 className='general-title'>General Information</h1>
   </div>
   <div className='main-info'>
    <form className='form-info' onSubmit={handleSubmit}>
      <input className='input-age'
        type='number'
        name='age'
        placeholder='your age'
        autoComplete='off'
        onChange= {e => setUser_age(e.target.value)}
       />
     <select className='option-gnd'
      onChange= {e => setUser_gender(e.target.value)}>
      <option className='gender-option' value={null}>Select Gender</option>
      <option className='gender-option' >Female</option>
      <option className='gender-option' >Male</option>
      <option className='gender-option' >Other</option>
     </select>
    <button className='btn' type='submit'>Next</button>
   </form>
  </div>
</>
 );
}
export default IntakeForm;
