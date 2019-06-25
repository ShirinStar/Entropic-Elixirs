import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'


function ConcentForm(props) {
  const { handleConcent } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleConcent;
    const input = document.querySelector('input[type=checkbox]');
    if(input.checked == false) {
      alert("your concent is needed in order to proceed");
    } else {
      submit()
    }
  }

return (
<div>
  <h1>Terms of use</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.</p>

  <form onSubmit={handleSubmit}>
    <input type="checkbox" name="terms" value="terms"/> agree to terms<br/>
    <button type='submit'>submit</button>
  </form>

 </div>
  );
}
export default withRouter(ConcentForm);
