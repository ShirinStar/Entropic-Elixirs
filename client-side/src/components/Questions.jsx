import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import questions from './questionsList';
import { postAnswer } from '../services/apiHelper';


function Questions(props) {
  const { handleNext, questionId, clearState } = props
  const [answers, setAnswers] = useState({
    'breaking': 0,
    'building': 0,
    'with_it': 0,
    'against_it': 0,
    'intuition': 0,
    'intention': 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    const input = document.querySelector('input[name="answer"]:checked');
    const answerIndex = parseInt(input.getAttribute("data-answer-index"));
    let newAnswers = answers;
    questions.questions[questionId].answers[answerIndex].scores.forEach((score) => {
      newAnswers = {
        ...newAnswers,
        [score.catagory]: newAnswers[score.catagory] + parseFloat(score.value)
      }
    })
    setAnswers(newAnswers);
    const submit = handleNext;
    submit(newAnswers);
  }

  const audioRef = useRef();

  const play = async () => {
    try {
      audioRef.current.load();
      await audioRef.current.play();
    } catch (e) {
      console.log('audio error: ', e.message);
    }
  }

  useEffect(() => {
    play();
  });

  const audioSrc = "../audio/" + questionId + ".wav"

  return (
    <>
      <div className='form-container'>
        <div className='general-container'>
          <div className='div-title'>
            <h1 className='general-title'>Question no. {questions.questions[questionId].number} of 13</h1>
          </div>

          <audio ref={audioRef}>
            <source id="audio" src={audioSrc} type="audio/wav" />
          </audio>

          <div>
            <h2 className='question-title'>{questions.questions[questionId].title}</h2>
          </div>

          <div className='radio-form'>
            <form className='form-q' onSubmit={handleSubmit}>
              {
                questions.questions[questionId].answers.map((answer, index) => {
                  console.log(answer.scores);;
                  return (
                    <div className='wrapper' key={answer.text}>
                      <input className='question-input'
                        data-answer-index={index}
                        data-catagory={answer.scores.catagory}
                        value={index}
                        type='radio'
                        name='answer'
                        required />
                      <label className="question-label" > {answer.text} </label>
                    </div>
                  )
                })
              }
              <button className='btn' type='submit'>Next</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
