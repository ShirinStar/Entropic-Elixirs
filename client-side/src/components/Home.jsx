import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {

  return(
    <div className='home'>
    <h1 className='head-line'>Entropic Elixirs<span className='span-headlin'>™</span></h1>
    <h3 className='tagline-home'>Presented by Aura and powered by you</h3>
    <button className='head-btn' onClick={()=>props.history.push('/intro1')}>start</button>
    <p className='temp-txt'>[ temporal button ]</p>
    </div>
  )
}

export default withRouter(Home);
