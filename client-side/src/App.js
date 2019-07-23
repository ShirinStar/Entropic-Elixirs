import React, { useState, useContext, useEffect } from 'react';
import Home from './components/Home';
import IntakeForm from './components/IntakeForm';
import TextOne from './components/TextOne';
import TextTwo from './components/TextTwo';
import TextThree from './components/TextThree';
import ConsentForm from './components/ConsentForm';
import Questions from './components/Questions';
import FourteenQ from './components/FourteenQ';
import Sum from './components/Sum';
import SocketContext from './components/SocketContext';
import Header from'./components/Header';
import axios from 'axios';
import { intakeUser, postAnswer, updatedAnswer } from './services/apiHelper';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App(props) {
  const [userInfo, setUserInfo] = useState(''); // connect to user intake form
  const [questionId, setQuestionId] = useState(0); // question ->url
  const [finalAnswers, setFinalAnswers] = useState(''); //grabbing users answers from components
  const [currentToken, setCurrentToken] = useState('');

  const clearState = () => {
    setUserInfo('')
    setQuestionId(0)
    setFinalAnswers('') // how to reset it midway
  }

  const handleRegister = async(userInfo) => {
    console.log(userInfo);
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
   if((questionId + increment) == 2) {
     setFinalAnswers(userAnswers)
     props.history.push('/14')
  } else { props.history.push(`/question/${questionId + increment}`);
 }
}

 const handleContinue = async(userAnswers) => {
   setFinalAnswers(userAnswers)
  try {
   await updatedAnswer(userAnswers)
  } catch(error) {
   console.log(error);
  }
  props.history.push('/sum');
}

const { incoming } = useContext(SocketContext)

useEffect(() => {
  if(incoming.data != currentToken) {
    setCurrentToken(incoming)
  }
  console.log('incoming msg', incoming);
}, [currentToken])

  return (
   <div className="App">

     <Route path='/' render={props => (
      <Header
      clearState={clearState}
      />
     )}/>

     <Route exact path='/' render={Home}/>
     <Route path='/intro1' render={props => (
      <TextOne
      clearState={clearState}
      />
     )}/>
     <Route path='/intro2' render={TextTwo} />
     <Route path='/intro3' render={TextThree} />

     <Route path='/welcome' render={props => (
       <ConsentForm
         {...props}
        handleConsent={handleConsent}
        />
       )}/>

      <Route path='/intake' render={props => (
       <IntakeForm
        userInfo={userInfo}
        handleRegister={handleRegister}
       />
     )}/>

      <Route path={'/question/:questionId'} render={props => (
       <Questions
        questionId={props.match.params.questionId}
        handleNext={handleNext}
       />
     )}/>

     <Route path='/14' render={props => (
      <FourteenQ
       finalAnswers={finalAnswers}
       handleContinue={handleContinue}
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
