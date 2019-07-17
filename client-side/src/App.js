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
import { intakeUser, postAnswer, updatedAnswer, loginWS, postUserId, getUserId } from './services/apiHelper';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(props) {
  const [user_id, setUser_id] = React.useState(''); //future connect to websocket call receive user id
  const [userToken, setUserToken] = React.useState(''); //future connect to websocket call receive user id
  const [userInfo, setUserInfo] = React.useState(''); // connect to user intake form
  const [questionId, setQuestionId] = React.useState(0); // question ->url
  const [finalAnswers, setFinalAnswers] = React.useState(''); //grabbing users answers from components

  const ws = new WebSocket('ws://localhost:8080'); //change this address
  ws.addEventListener('open', function open() {
    console.log('Websocket connection established 🚀');
    ws.send('main app is connected');
  });

  ws.addEventListener('message', async function incoming(msg) {
    const data = JSON.parse(msg.data);
    if(data.type == 'token') //change this to type of data they are sending
    {
      let wsToken = data.value
      setUserToken(wsToken)
      console.log('setting user token from ws', wsToken);
      // const settingToken = await localStorage.setItem('token', wsToken);
      // console.log('local storage', settingToken);
      await handleDemo();
    };

  });

  const handleDemo = async() => {
    let token = userToken
    const getId = await getUserId(token)
    console.log('userid from app', getId);

    const id = Object.keys(getId).map(key => {
        const value = getId[key]
        return value
    })
    setUser_id(id) // this stays empty...
    const postId = await postUserId(id)
    props.history.push(`/intro1`)
    // const userID = await localStorage.setItem('id', resp.id); // resp is an object it comes undefine
    // const userToken = await localStorage.setItem('token', token.value);
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
     await updatedAnswer(user_id, userAnswers)
    } catch (error) {
    console.log(error);
   }
   let increment = 1;
   setQuestionId(questionId + increment);
   if((questionId + increment) == 13) {
     setFinalAnswers(userAnswers)
     props.history.push('/14')
  } else { props.history.push(`/question/${questionId + increment}`);
 }
}

 const handleContinue = async(userAnswers) => {
   setFinalAnswers(userAnswers)
  try {
   await updatedAnswer(user_id, userAnswers)
  } catch(error) {
   console.log(error);
  }
  props.history.push('/sum');
 }

   // useEffect(() => {
   //
   //
   //
   //   const getUserId = async () => {
   //    try {
   //     const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
   //     console.log(resp.data);
   //     return resp.data
   //    } catch(error) {
   //     console.log(error);
   //     }
   //   };
   //
   //   // async function fetchId() {
   //   //  fetch('https://jsonplaceholder.typicode.com/users')
   //   //   .then(function(req, res) {
   //   //     if(req.body && req.body.token == userToken)
   //   //     return res.json();
   //   //   }
   //   //   })
   //   //   const resp = await axios.get(getUserId());
   //   //   postUserId(resp.data.id);
   //   //   console.log(resp.data.id);
   //   // }
   //
   //   getUserId();
   // }, [userToken]);

  return (
   <div className="App">

     <Route exact path='/' render={props => (
     <Home
       handleDemo={handleDemo}
      />
    )}/>

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
        user_id={user_id}
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
     />
   )}/>
    </div>
  );
};

export default withRouter(App);
