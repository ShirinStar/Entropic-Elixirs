import React, { useState } from 'react';
import rankings from './questionFourteen';
import Questions from './Questions';


function FourteenQ(props) {

  const {handleDone} = props
  const [fourteenAnswer, setFourteenAnswer] = React.useState({
    // 'answer_breaking': 0,
    // 'answer_building': 0,
    // 'answer_with_it': 0,
    // 'answer_against_it': 0,
    'answer_intuition': 0,
    'answer_intention': 0
  });

  const handleSubmit = async (e) => {
   e.preventDefault()
   // console.log(answers);
   const input = document.querySelector('input[name="fourteen"]:checked');
   let newAnswers = fourteenAnswer;
   rankings.rankings.forEach(category => {
     category.categories.forEach(cat => {
       console.log(cat.category);
       console.log(cat.value);
       newAnswers = {
           ...newAnswers,
           [cat.category] : parseInt(cat.value)
         }
     })
   })
   setFourteenAnswer(newAnswers)
   console.log(newAnswers);

   // setAnswers(fourteenAnswers);
   const submit = handleDone;
    submit(newAnswers);
  }

  return (
  <>
  <div className='general-container'>
   <div className='div-title-q14'>
     <h1 className='general-title'>How certain are you about what you want in various different areas of your life?</h1>
    </div>

    <div className='container-q14'>
     <h2 className='title-q14'>Professional</h2>
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
           <div key={index}>
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

    <div className='container-q14'>
     <h2 className='title-q14'>Romantic</h2>
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
           <div key={index}>
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

    <div className='container-q14'>
     <h2 className='title-q14'>Artistic</h2>
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
           <div key={index}>
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

    <div className='container-q14'>
     <h2 className='title-q14'>Social</h2>
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
           <div key={index}>
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

    <div className='container-q14'>
     <h2 className='title-q14'>Familial</h2>
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
           <div key={index}>
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

   <button form='q-14' className='btn' type='submit'>Done</button>
   </div>
  </>
  )
 };

export default FourteenQ;
