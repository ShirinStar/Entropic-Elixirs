import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Header(props) {
  const {clearState} = props

  function clearingState(e) {
    e.preventDefault();
    clearState();
    props.history.push('/')
  }

  return (
    <div>
     <button className='close-btn' onClick={clearingState}>X</button>
    </div>
  )
}

export default withRouter(Header);
