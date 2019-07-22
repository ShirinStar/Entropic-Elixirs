import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function TextOne(props) {
const {clearState} = props

function clearingState(e) {
  e.preventDefault();
  clearState();
  props.history.push('/intro2')
}

  return(
    <div className='text-container'>

      <div>
        <div className='div-title'>
        <h1 className='general-title'>Hello</h1>
      </div>

       <p className='intro-text'>Entropic Elixirs helps align your physiology with your personal
       growth goals by providing the right mixture of essences to give your body the push that your soul needs to thrive. </p>
       <button className='head-btn-intro' onClick={clearingState}>Next</button>
      </div>
    </div>
  )
}

export default withRouter(TextOne);
