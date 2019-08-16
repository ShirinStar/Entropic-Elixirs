import React, { useState, useEffect } from 'react';
import { LineChart, ColumnChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import Loader from 'react-loader-spinner';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { drinkMaker, updatedAnswer } from '../services/apiHelper';
import { withRouter } from 'react-router-dom';

function Sum(props) {
  const {finalAnswers, clearState} = props
  const [isLoading, setIsLoading] = useState(true);
  const data = finalAnswers

  const graphData= {
    breaking: (data.breaking / 12 * 100).toFixed(2),
    building: (data.building / 12 * 100).toFixed(2),
    in_flow: (data.with_it / 12 * 100).toFixed(2),
    out_of_flow: (data.against_it / 12 * 100).toFixed(2),
    intuition: (data.intuition / 24 * 100).toFixed(2),
    intention: (data.intention / 24 * 100).toFixed(2)
  }

  const answerValues = JSON.stringify(Object.values(graphData));

  function drinkMaking(e) {
    e.preventDefault();
    updatedAnswer(graphData)
    //this is where the answers get sent to the drink API route/ drinkMaker.
    drinkMaker(answerValues);
    clearState();
    props.history.push('/');
  }

  useEffect(() => {
   page();
  });

 const page = () => {
  setTimeout(() => {
    setIsLoading(false)
  }, 6000)
 }

return (
 <>
  {
    isLoading
    ?
    <div className='loading'>
      <p className='loading-text'>Calculating the results...</p>
        <Loader
          type="Oval"
          color="#92298E"
          height={300}
          width={350}
          />
      </div>
     :
      <div className='general-container'>
          <div className='div-title'>
           <h1 className='general-title'>Summary</h1>
          </div>

          <div className='graph-container'>
          <button className='btn-sum' type='submit' onClick={drinkMaking}>make me my drink</button>

          <PieChart id="answers-chart" data={graphData}
            width="450px" height="450px"
            suffix="%"
            legend={false}
            library={{
                 plugins: {
                   datalabels: {
                     color: '#ffffff',
                     formatter: function(value, context) {
                       if (value > 0) {
                       return value + '%';
                     } else {
                       return '';
                     }
                   }
                 }
               }
            }}
          />

          <h2 className='graphMainTitle'>Active Ingredients</h2>

          <div className='graphText'>
            <div className='graphTextBox'>
              <h3 className='graphTitle1'>Breaking</h3>
              <p className='graphText'>Deconstructs current perceptions, norms and behaviors to reveal concealed truths about self and life</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle2'>Building</h3>
              <p className='graphText'>Constructs new perceptions, norms and behaviors based on insights uncovered during a phase of breaking</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle3'>In flow</h3>
              <p className='graphText'>Aligns the body’s vibrations with external energy flow, maintains and amplifies current trajectory</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle4'>Out of flow</h3>
              <p className='graphText'>Disrupts alignment between the body’s vibrations and external energy flow; shifts trajectory away from inertia</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle5'>Intuition</h3>
              <p className='graphText'>Promotes perception of and receptiveness to external energetic cues and currents, can provide clarity or answers</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle6'>Intention</h3>
              <p className='graphText'>Amplifies and directs the body’s vibrations towards specific targets of manifestation</p>
            </div>
          </div>
         </div>
       </div>
      }
  </>
 )
}

export default withRouter(Sum);
