import React, { useState } from 'react';
import { Wrapper } from './style/Style';
import IntakeForm from './components/IntakeForm';
import { intakeUser } from './services/apiHelper'

function App(props) {

  const [user, setUser] = React.useState(''); //future connect to websocket call receive user id
  const [userInfo, setUserInfo] = React.useState(''); // connect to user inttake form

  const handleRegister = async(data) => {
    try {
      const resp = await intakeUser(userInfo)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <IntakeForm
        userInfo={userInfo}
        handleRegister={handleRegister}
      />
    </Wrapper>
  );
};

export default App;
