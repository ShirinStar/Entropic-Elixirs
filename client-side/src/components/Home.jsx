import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {

  return(
    <div className='home'>
    <h1 className='head-line'>Entropic Elixirs</h1>
    <button className='head-btn' onClick={()=>props.history.push('/welcome')}>start</button>
    <p className='temp-txt'>[ temporal button ]</p>
    </div>
  )
}

export default withRouter(Home);
