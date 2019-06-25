import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {

  return(
    <div>
    <h1>Home</h1>
    <button onClick={()=>props.history.push('/welcome')}>submit</button>
    </div>
  )
}

export default withRouter(Home);
