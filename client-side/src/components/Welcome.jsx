import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function Welcome(props) {

  return (
    <div className='text-container'>
      <h3 className='welcomeText'>Before you sit, please take a cup from the stack
      and place it on the pedestal on top of the machine</h3>
      <button className='welcome-btn' onClick={()=>props.history.push('/intro1')}>Next</button>
    </div>
  )
}

export default withRouter(Welcome);
