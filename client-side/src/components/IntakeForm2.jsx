import React, { useState } from 'react';
// import { Button, Form, FormGroup, Input, Select } from 'reactstrap';

function IntakeForm() {
  const [userAge, setUserAge] = React.useState('');
  const [userGender, setUserGender] = React.useState('');

return (
  <form onSubmit = {e => {e.preventDefualt();}}>
    <input
      type= 'age'
      name= 'age'
      value= {userAge}
      placeholder= 'your age'
      onChange= {e => setUserAge(e.target.value)}
      />

    <select name= 'gender' onChange = {e => setUserGender(e.target.value)}>
    <option>Your gender</option>
    <option>Femal</option>
    <option>Male</option>
    <option>Other</option>
    </select>

  <button type='submit'>Next</button>

  </form>
 );
}
export default IntakeForm;
