import axios from 'axios';
const BASE_URL = 'http://192.168.7.49:3001';
// const BASE_WS = 'https://dummy-rest-api.glitch.me/user'
// https://glitch.com/edit/#!/dummy-rest-api?path=server.js:1:0

const intakeUser = async(userInfo) => {
  try {
    const { user_age, user_gender } = userInfo;
    const resp = await axios.post(`${BASE_URL}/users`, {
    user_age,
    user_gender
    });
    console.log(resp.data)
    return resp.data
  } catch(error) {
    console.log(error);
  }
 };

const loginWS = async(token) => {
  try {
    const resp = await axios.post(`${BASE_URL}/users/login`, {
      token
    });
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
  }
 };

const postAnswer = async (userAnswers) => {
 try {
    const resp = await axios.post(`${BASE_URL}/users/answers`, userAnswers);
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
 };

const updatedAnswer = async (userAnswers) => {
 try {
    const resp = await axios.put(`${BASE_URL}/users/answers`, userAnswers);
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
 };

const drinkMaker = async (answerValues) => {
  console.log('hi ryan, this goes to you');
 try {
   //this is a dummy post to the answers server route. need to be changed once connected to pi.
    const resp = await axios.post(`${BASE_URL}/users/answers/drinkMaker`, {
      answerValues
    });
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
 };

export {
  intakeUser,
  postAnswer,
  updatedAnswer,
  loginWS,
  drinkMaker
 }
