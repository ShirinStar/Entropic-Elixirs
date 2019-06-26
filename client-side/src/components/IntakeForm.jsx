import React, { useState } from 'react';

function IntakeForm(props) {
  const { handleRegister, userInfo } = props
  const [ user_age, setUser_age ] = React.useState('');
  const [ user_gender, setUser_gender ] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleRegister;
    const userInfo = {
      user_age,
      user_gender
    }
    if(!user_age || !user_gender) {
      alert("Please enter a valid answer");
    } else {
     submit(userInfo);
  }
}

return (
  <div>
   <h1>General Information</h1>
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        name='age'
        placeholder='your age'
        autoComplete='off'
        onChange= {e => setUser_age(e.target.value)}
       />
     <select
      onChange= {e => setUser_gender(e.target.value)}>
      <option className='gender-option' value={null}>Select Gender</option>
      <option className='gender-option' >Female</option>
      <option className='gender-option' >Male</option>
      <option className='gender-option' >Other</option>
     </select>
    <button type='submit'>Next</button>
   </form>
  </div>
 );
}
export default IntakeForm;
