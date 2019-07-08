import React, { useState } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';


function Sum(props) {
const {finalAnswers} = props
// console.log(finalAnswers);

const graphData = finalAnswers

const drinkMaker = () => {
  Object.keys(graphData).map(key => {
      const value = graphData[key]
      console.log(key, value);
      //here connect to post to server to send to Ryan
  })
}

return (
<>
  <div className='div-title'>
   <h1 className='general-title'>Summary</h1>
  </div>

  <div className='graph-container'>
    <PieChart id="answers-chart" data={graphData}
    width="400px" height="500px"
    />
  </div>

  <button className='btn' onClick={drinkMaker} >make me my drink</button>
</>
 )
}

export default Sum;
