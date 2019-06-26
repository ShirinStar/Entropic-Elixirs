import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function ConsentForm(props) {
  const { handleConsent } = props

  const handleMsg = () => {
    const form = document.querySelector('form');
    const textEl = document.createElement('p');
    textEl.classList.add('textEl');
    textEl.innerText = "*your consent is needed in order to proceed"
    form.appendChild(textEl);
    const elsToDelete = setTimeout(() => {
      form.removeChild(textEl);
    },2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleConsent;
    const input = document.querySelector('input[type=checkbox]');
    if(input.checked == false) {
     handleMsg()
    } else {
     submit()
    }
  }

return (
<>
 <div className='div-title'>
  <h1 className='general-title'>Terms of use</h1>
 </div>

<div className='main-terms'>
  <p className='text-terms'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.</p>
  <form className='form-terms' onSubmit={handleSubmit}>
    <input className='check-terms' type="checkbox" name="terms" value="terms"/> agree to terms<br/>
    <button className='btn' type='submit'>submit</button>
  </form>
 </div>
 </>
  );
}
export default withRouter(ConsentForm);
