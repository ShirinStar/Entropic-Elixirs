import React, { useState } from 'react';
import { Wrapper } from './style/Style';
import Home from './components/Home';
import IntakeForm from './components/IntakeForm';
import ConcentForm from './components/ConcentForm';
import { intakeUser } from './services/apiHelper';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(props) {

  const [user, setUser] = React.useState(''); //future connect to websocket call receive user id
  const [userInfo, setUserInfo] = React.useState(''); // connect to user intake form

  const handleRegister = async(userInfo) => {
    console.log(userInfo);
    try {
      const resp = await intakeUser(userInfo)
    } catch (error) {
      console.log(error);
    }
    props.history.push('/1');
  }

  const handleConcent = () => {
    props.history.push('/intake');
  }

  return (
   <Router>
    <div className="App">
     <Route exact path='/' render={Home} />

      <Wrapper>

       <Route exact path='/' render={props => (
        <ConcentForm
         {...props}
        handleConcent={handleConcent}
        />
       )}/>

      <Route exact path='/intake' render={props => (
      <IntakeForm
        userInfo={userInfo}
        handleRegister={handleRegister}
       />
     )}/>

     </Wrapper>
    </div>
  </Router>
  );
};

export default withRouter(App);
