import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
 const {handleDemo} = props

return(
  <>
    <div className='home'>
    <h1 className='head-line'>Entropic Elixirs<span className='span-headlin'>™</span></h1>
    <h3 className='tagline-home'>Presented by Aura and powered by you</h3>
    <button className='welcome-btn' onClick={()=>props.history.push('/intro1')}>Start</button>
    </div>
  </>
  )
}

export default withRouter(Home);
