import React, { useState } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';


function Sum(props) {
const {finalAnswers} = props
// console.log(finalAnswers);

const graphData = finalAnswers

// Object.keys(graphData).map(key => {
//     const value = graphData[key]
//     console.log(value);
// })

return (
<>
  <div className='div-title'>
   <h1 className='general-title'>Summary</h1>
  </div>

  <div className='graph-container'>
    <LineChart id="answers-chart" data={graphData}
    width="400px" height="500px"
    />
  </div>
</>
 )
}

export default Sum;
