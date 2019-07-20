import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import IntakeForm from './components/IntakeForm';
import TextOne from './components/TextOne';
import TextTwo from './components/TextTwo';
import TextThree from './components/TextThree';
import ConsentForm from './components/ConsentForm';
import Questions from './components/Questions';
import FourteenQ from './components/FourteenQ';
import Sum from './components/Sum';
import axios from'axios';
import { intakeUser, postAnswer, updatedAnswer, loginWS } from './services/apiHelper';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(props) {
  const [userInfo, setUserInfo] = React.useState(''); // connect to user intake form
  const [questionId, setQuestionId] = React.useState(0); // question ->url
  const [finalAnswers, setFinalAnswers] = React.useState(''); //grabbing users answers from components

  const ws = new WebSocket('wss://staging.projectamelia.ai/pusherman/companions/login/websocket?app=entropic'); //change this address
  ws.addEventListener('open', function open() {
    console.log('Websocket connection established 🚀');
    ws.send('main app is connected');
    //need to find why the ws is keep reconnecting with each trigger
    // {'force new connection':true}
  });

  ws.addEventListener('message', async function incoming(msg) {
    const data = JSON.parse(msg.data);
    console.log('ws msg', data);
    const result = await loginWS(data.token);
    if (result.status == "success") {
      props.history.push('/intro1');
    }
  });

  const clearState = () => {
    setUserInfo('')
    setQuestionId(0)
    setFinalAnswers('')
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

// const handleDrink = () => {
//   clearState()
//   props.history.push('/');
// }

  return (
   <div className="App">

     <Route exact path='/' render={Home}/>
     <Route path='/intro1' render={TextOne} />
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
