const axios = require('axios');
const BASE_URL = 'http://localhost:3001';

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

// const getUser = async (userId) => {
//   const resp = await axios.get(`${BASE_URL}/users/${userId}`)
//   });
//   console.log(resp.data);
//   return resp.data
// }

const postAnswer = async (user_id, userAnswers) => {
 try {
    const resp = await axios.post(`${BASE_URL}/users/${user_id}/answers`, userAnswers);
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
};

const updatedAnswer = async (user_id, userAnswers) => {
 try {
    const resp = await axios.put(`${BASE_URL}/users/${user_id}/answers`, userAnswers);
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
  loginWS
}
