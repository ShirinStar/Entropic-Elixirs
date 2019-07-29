import React, { useState } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import { drinkMaker, updatedAnswer } from '../services/apiHelper';
import { withRouter } from 'react-router-dom';


function Sum(props) {
  const {finalAnswers, clearState} = props
  const data = finalAnswers

  const graphData= {
    breaking: (data.breaking / 12 * 100).toFixed(2),
    building: (data.building / 12 * 100).toFixed(2),
    with_it: (data.with_it / 12 * 100).toFixed(2),
    against_it: (data.against_it / 12 * 100).toFixed(2),
    intuition: (data.intuition / 24 * 100).toFixed(2),
    intention: (data.intention / 24 * 100).toFixed(2)
  }

  const answerValues = JSON.stringify(Object.values(graphData));

  function drinkMaking(e) {
    e.preventDefault();
    updatedAnswer(graphData)
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
      <PieChart id="answers-chart" data={graphData}
      width="400px" height="500px"
      suffix="%"
      />
    </div>
    <button className='btn-sum' type='submit' onClick={drinkMaking}>make me my drink</button>
    </div>
  </>
 )
}

export default withRouter(Sum);
