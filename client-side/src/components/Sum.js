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
          height={400}
          width={550}
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

          <div className='graphText'>
            <div className='graphTextBox'>
              <h3 className='graphTitle1'>Breaking</h3>
              <p className='graphText'>Deconstructing perceptions, norms and behaviors that comprise current reality;
              ideal for those actively or passively seeking concealed truths about one’s self and life </p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Introduces entropy to disrupt molecular bonding;
              designed to initiate and/or support a transformation cycle</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle2'>Building</h3>
              <p className='graphText'>Constructs new perceptions, norms and behaviors based on insights and information
              uncovered in self-discovery; ideal for those coming out of periods of breaking, and looking for what’s next</p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Reduces entropy and ionizes molecules to promote the creation of new bond and
              structures from previously deconstructed materials</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle3'>With the flow</h3>
              <p className='graphText'>Amplifies the body’s alignment with external energy flow;
              useful for those who wish to maintain or amplify their current trajectory</p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Directionally aligns the molecules of the energetic body with the
              flow of energies outside it; minimizes drag between individual and their environment</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle4'>Against the flow</h3>
              <p className='graphText'>Disrupts alignment between the body’s vibrations and external energetic flow;
              ideal for those seeking a shift away from the inertia of life and/or external circumstances</p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Scrambles molecular alignment to disrupt trajectory of current flow</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle5'>Intuition</h3>
              <p className='graphText'>Promotes perception of and receptiveness to external energetic cues and currents;
              supportive of those seeking clarity or answers</p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Promotes receptivity to external energetic cues and signals by activating the
              parasympathetic nervous system</p>
            </div>

            <div className='graphTextBox'>
              <h3 className='graphTitle6'>Intention</h3>
              <p className='graphText'>Amplifies focus and trajectory of the body’s vibratory signature to direct it towards specific
              targets of manifestation; ideal for one who knows what they seek, but requires assistance to make it real</p>
              <p className='graphSubTitle'>Active Ingredient→ </p>
              <p className='graphTextSecondary'> Sharpens one’s ability to manifest against specific ideas or intentions by
              activating precise triggers inside the sympathetic nervous system</p>
            </div>
          </div>
         </div>
       </div>
      }
  </>
 )
}

export default withRouter(Sum);
