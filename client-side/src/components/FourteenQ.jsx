import React, { useState } from 'react';
import rankings from './questionFourteen';


function FourteenQ(props) {
  const {handleContinue, finalAnswers} = props
  console.log(finalAnswers, 'finalAnswers');

  const handleSubmit = async (e) => {
   e.preventDefault()
   const input = document.querySelector('input[name="fourteen"]:checked');
   let newAnswers = finalAnswers;
   rankings.rankings.forEach(category => {
     category.categories.forEach(cat => {
       newAnswers = {
           ...newAnswers,
           [cat.category] : newAnswers[cat.category] + parseFloat(cat.value)
         }
     })
   })
   const submit = handleContinue;
    submit(newAnswers);
  }

  return (
  <>
  <div className='fourteen-container'>
   <div className='div-title-q14'>
     <h1 className='fourteen-title'>How certain are you about what you want in various different areas of your life?</h1>
    </div>

    {rankings.titles.map(title => (
    <div key={title} className='container-q14'>
     <h2 className='title-q14'>{title}</h2>
     <div className='number-container'>
     <h4 className='number-q14'> 1 </h4>
     <h4 className='number-q14'> 2 </h4>
     <h4 className='number-q14'> 3 </h4>
     <h4 className='number-q14'> 4 </h4>
     <h4 className='number-q14'> 5 </h4>
     </div>

    <form id='q-14' className='form-q14' onSubmit={handleSubmit}>
       <label className='lable-q14-1' htmlFor="uncertain">Totally uncertain</label>
       {
        rankings.rankings.map((ranking, index) => {
          return (
           <div className='wrapper-14' key={index}>
            <input className='radio-btn-q14' data-ranking-index={index}
                   data-catagory={ranking.categories.catagory}
                   value={ranking.categories.value}
                   type='radio'
                   name='fourteen'
                   required/>
          </div>
           )
         })
       }
       <label className='lable-q14-2' htmlFor="certain">Completely certain</label>
    </form>
   </div>
 ))}
 <button form='q-14' className='btn' type='submit'>Continue</button>
 </div>
</>
)
};

export default FourteenQ;
