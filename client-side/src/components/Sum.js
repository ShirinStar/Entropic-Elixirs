import React, { useState } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import { drinkMaker } from '../services/apiHelper';


function Sum(props) {
  const {finalAnswers} = props
  // console.log(finalAnswers);

  const graphData = finalAnswers
  const answerValues = JSON.stringify(Object.values(graphData));
  console.log(answerValues);

  function drinkMaking(e) {
  e.preventDefault();
  drinkMaker(answerValues)
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

    <button className='btn-sum' onClick={drinkMaking}>make me my drink</button>
    </div>
  </>
 )
}

export default Sum;
