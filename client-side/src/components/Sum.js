import React, { useState } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import { drinkMaker } from '../services/apiHelper';
import { withRouter } from 'react-router-dom';


function Sum(props) {
  const {finalAnswers, clearState} = props

  const graphData = finalAnswers
  const answerValues = JSON.stringify(Object.values(graphData));

  function drinkMaking(e) {
    e.preventDefault();
    drinkMaker(answerValues);
    clearState();
    props.history.push('/');
  }

return (
  <>
  <div className='general-container'>
    <div className='div-title'>
     <h1 className='general-title'>Summary</h1>
    </div>

    <div className='graph-container'>
      <LineChart id="answers-chart" data={graphData}
      width="400px" height="500px"
      />
    </div>

    <button className='btn-sum' type='submit' onClick={drinkMaking}>make me my drink</button>
    </div>
  </>
 )
}

export default withRouter(Sum);
