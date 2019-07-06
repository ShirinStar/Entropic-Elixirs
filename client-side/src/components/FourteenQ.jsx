import React, { useState } from 'react';
import rankings from './questionFourteen';


function FourteenQ(props) {
  const [answers, setAnswers] = React.useState({
    'answer_breaking': 0,
    'answer_building': 0,
    'answer_with_it': 0,
    'answer_against_it': 0,
    'answer_intuition': 0,
    'answer_intention': 0
  });

  const handleSubmit = async (e) => {
   e.preventDefault()
   const input = document.querySelector('input[name="fourteen"]:checked');
   const answerIndex = parseInt(input.getAttribute("data-ranking-index"));
   let fourteenAnswers = answers;
   rankings.rankings.categories[answerIndex].forEach((category) => {
     fourteenAnswers = {
       ...fourteenAnswers,
       [categories.category] : fourteenAnswers[ranking.category] + parseInt(ranking.value)
     }
   })
   console.log(fourteenAnswers);
   // setAnswers(newAnswers);
   // const submit = handleNext;
   //  submit(newAnswers);
  }

  return (
  <>
   <div className='div-title'>
     <h1 className='general-title'>How certain are you about what you want in various different areas of your life?</h1>
    </div>

    <div>
      <h2>Professional</h2>
      <form className='form-q14' onSubmit={handleSubmit}>
       <label htmlFor="uncertain">Totally uncertain</label>
       {
         rankings.rankings.map((ranking, index) => {
          return (
           <div key={index}>
            <input data-ranking-index={index}
                   data-catagory={ranking.categories.catagory}
                   value={ranking.categories.value}
                   type='radio'
                   name='fourteen'
                   required/>
          </div>
           )
         })
       }
       <label htmlFor="certain ">Completely certain</label>
     <button className='btn' type='submit'>Done</button>
    </form>
   </div>
  </>
  )
 };

export default FourteenQ;
