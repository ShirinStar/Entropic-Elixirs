import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from'./Header';

function TextOne(props) {
const {clearState} = props

  return(
   <>
    <Route path='/' render={props => ( <Header clearState={clearState} /> )}/>
    <div className='text-container'>
      <div>
        <div className='div-title'>
        <h1 className='general-title'>Hello</h1>
      </div>
       <p className='intro-text'>Here’s how it works. In a few minutes, we’ll take you through a short survey to assess the current state of your energetic body.
       Once we’ve calculated your results, our system will generate a recommendation for a custom elixir that will be dispensed by the machine to your right.
       Then, you drink the elixir on the spot.<br/>
       Before we can begin, we’ll need your consent to the following terms and conditions.
       </p>
       <button className='head-btn-intro' onClick={()=>props.history.push('/welcome')}>Next</button>
      </div>
    </div>
   </>
  )
}

export default withRouter(TextOne);
