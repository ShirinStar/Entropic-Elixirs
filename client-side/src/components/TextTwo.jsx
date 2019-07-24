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

       <p className='intro-text'>The ingredients that combine to create your Entropic Elixir wok at the molecular level to shift your body’s vibratory behavior in specific ways.
       Whether helping make or break connections, move with or against the flow, receive the right feedback at the right time, or project and manifest your intentions,
       Entropic Elixirs give you the extra boost that can make the work of living and relating so much easier. </p>
       <button className='head-btn-intro' onClick={()=>props.history.push('/intro3')}>Next</button>
      </div>
    </div>
  </>
  )
}

export default withRouter(TextOne);
