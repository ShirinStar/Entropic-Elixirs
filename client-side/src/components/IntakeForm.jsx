import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from'./Header';

function IntakeForm(props) {
  const {handleRegister, userInfo, clearState} = props
  const [user_age, setUser_age] = useState('');
  const [user_gender, setUser_gender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleRegister;
    const userInfo = {
      user_age,
      user_gender
    }
    submit(userInfo);
  }

return (
 <>
 <Route path='/' render={props => ( <Header clearState={clearState} /> )}/>
  <div className='general-container'>
    <div className='div-title'>
     <h1 className='general-title'>General Information</h1>
    </div>

   <audio autoPlay src="../audio/age-gender.wav"/>

   <div className='main-info'>
    <form className='form-info' onSubmit={handleSubmit}>
      <label htmlFor='age'>Age: </label>
      <input className='input-age'
        type='number'
        name='age'
        placeholder='Please provide your age'
        autoComplete='off'
        onChange= {e => setUser_age(e.target.value)}
        required /> <br />
     <label className='label-gender' htmlFor='gender'>Gender: </label> <br />
       <input className='input-man' type="radio" name='gender' value='Male' required onChange={e => setUser_gender(e.target.value)}/> Male<br />
       <input type="radio" name='gender' value='Female' required onChange={e => setUser_gender(e.target.value)}/> Female<br />
       <input type="radio" name='gender' value='Non-binary' required onChange={e => setUser_gender(e.target.value)}/> Non-binary<br />
       <input type="radio" name='gender' value='Gender non-conforming' required onChange={e => setUser_gender(e.target.value)}/> Gender non-conforming<br />
    <button className='btn' type='submit'>Next</button>
   </form>
  </div>
 </div>
</>
 );
}
export default IntakeForm;
