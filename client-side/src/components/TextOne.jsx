import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function TextOne(props) {
const {clearState} = props

function clearingState(e) {
  e.preventDefault();
  clearState();
  props.history.push('/intro2')
}

  return(
  <>
    <div className='text-container'>
      <div>
        <div className='div-title'>
        <h1 className='general-title'>Welcome</h1>
      </div>

      <audio autoPlay src="../audio/screen1.wav"/>

       <p className='intro-text'>Entropic Elixirs are custom liquid supplements that align your energetic body with your personal growth goals.</p>
       <p className='intro-text'>Thanks to the groundbreaking science behind Vibratory Resonance, we’ve developed a transformative new approach
       that combines six active ingredients–each one working at the molecular level to activate a specific aspect of your body’s vibratory behavior.</p>
       <p className='intro-text'>Whether your aim is to break outdated patterns of consciousness; build new perceptions and norms; (re)define your
       relationship to the flow; heighten receptivity; or sharply manifest specific intentions in your life, Entropic Elixirs can help.</p>
       <button className='head-btn-intro' onClick={clearingState}>Next</button>
      </div>
    </div>
  </>
  )
}

export default withRouter(TextOne);
