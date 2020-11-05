import React, { useState, useContext, useEffect } from 'react';
import Home from './components/Home';
import Welcome from './components/Welcome';
import IntakeForm from './components/IntakeForm';
import TextOne from './components/TextOne';
import TextTwo from './components/TextTwo';
import Questions from './components/Questions';
import ScrollToTop from './components/ScrollToTop';
import Sum from './components/Sum';
import SocketContext from './components/SocketContext';
import axios from 'axios';
import { intakeUser, postAnswer, updatedAnswer, loginWS } from './services/apiHelper';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {v4 as uuidv4} from 'uuid';

function App(props) {
  const [userInfo, setUserInfo] = useState(''); // connect to user intake form
  const [questionId, setQuestionId] = useState(0); // question ->url
  const [finalAnswers, setFinalAnswers] = useState(''); //grabbing users answers from components
  const [currentToken, setCurrentToken] = useState('');

  const clearState = () => {  
    setUserInfo('');
    setQuestionId(0);
    setFinalAnswers('');
    props.history.push('/');
  }

  const handleRegister = async(userInfo) => {
    try {
      const resp = await intakeUser(userInfo)
    } catch (error) {
      console.log(error);
    }
    props.history.push(`/question/${questionId}`);
   }

  const handleConsent = () => {
    props.history.push('/intake');
  }

  const handleNext = async(userAnswers) => {
    try {
     await updatedAnswer(userAnswers)
    } catch (error) {
    console.log(error);
   }
   let increment = 1;
   setQuestionId(questionId + increment);
   if((questionId + increment) == 13) {
     setFinalAnswers(userAnswers)
     props.history.push('/sum')
   } else { props.history.push(`/question/${questionId + increment}`);
  }
 }

// const msg = useContext(SocketContext)
const id = uuidv4();

useEffect(() => {
  console.log('incoming msg', id);
  if(currentToken == '') {
    setCurrentToken(id)
    async function login () {
     const result = await loginWS(id);
     if(result.status == 'success') {
       props.history.push('/welcome');
     }
    }
    login();
  }
 }, [currentToken])

return (
   <div className="App">
     <Route exact path='/' render={Home}/>

     <Route path='/welcome' render={Welcome}/>

     <Route path='/intro1' render={props => (
      <TextOne
      clearState={clearState}
      />
     )}/>

     <Route path='/intro2' render={props => (
      <TextTwo
      clearState={clearState}
      />
     )}/>

     <Route path='/intake' render={props => (
       <IntakeForm
        userInfo={userInfo}
        handleRegister={handleRegister}
        clearState={clearState}
       />
      )}/>

     <ScrollToTop />

     <Route path={'/question/:questionId'} render={props => (
       <Questions
        questionId={props.match.params.questionId}
        handleNext={handleNext}
        clearState={clearState}
       />
     )}/>

    <Route path='/sum' render={props => (
     <Sum
      finalAnswers={finalAnswers}
      clearState={clearState}
      />
     )}/>
    </div>
  );
};

export default withRouter(App);
