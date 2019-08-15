import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function TextOne(props) {
  const {clearState} = props

  return(
  <>
    <div className='text-container'>
      <div>
        <div className='div-title'>
        <h1 className='general-title'>The Details</h1>
      </div>

      <audio autoPlay src="../audio/screen2.wav"/>

       <p className='intro-text'>Here’s how it works.</p>
       <p className='intro-text'>For the next few minutes, we’ll take you through a short survey to assess your
       energetic body and its position inside your current growth cycle.</p>
       <p className='intro-text'>Based on your results, our system will generate a custom-formulated elixir that
       will be dispensed by the machine.</p>
       <p className='intro-text'>Then, you drink the elixir on the spot.</p>
       <p className='intro-text'>Ready to begin?</p>
       <button className='head-btn-intro' onClick={()=>props.history.push('/intake')}>Let’s begin</button>
      </div>
    </div>
  </>
  )
}

export default withRouter(TextOne);
