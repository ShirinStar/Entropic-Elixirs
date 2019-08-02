import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from'./Header';

function TextOne(props) {
const {clearState} = props

function clearingState(e) {
  e.preventDefault();
  clearState();
  props.history.push('/intro2')
}

  return(
  <>
   <Route path='/' render={props => ( <Header clearState={clearState} /> )}/>
    <div className='text-container'>
      <div>
        <div className='div-title'>
        <h1 className='general-title'>Welcome</h1>
      </div>

      <audio autoPlay src="../audio/screen1.wav"/>

       <p className='intro-text'>Based on the groundbreaking science behind Vibratory Resonance*,
       Entropic Elixirs are a new kind of supplement – the world’s most transformative approach to wellness, yet.</p>
       <p className='intro-text'>Rather than working on your physical body like conventional medical approaches, our elixirs are designed to
       align the function of your energetic body with your personal growth goals.</p>
       <p className='intro-text'>Each ingredient in your custom Elixir is designed to activate a different aspect of your body’s vibratory behavior
       at the molecular level – breaking or building patterns of consciousness, defining your relationship to the flow,
       heightening receptivity, or sharpening your ability to manifestat intention.</p>
       <button className='head-btn-intro' onClick={clearingState}>Next</button>
      </div>
    </div>
  </>
  )
}

export default withRouter(TextOne);
