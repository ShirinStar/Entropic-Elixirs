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

// const getUser = async (userId) => {
//   const resp = await axios.get(`${BASE_URL}/users/${userId}`)
//   });
//   console.log(resp.data);
//   return resp.data
// }

const postAnswer = async (userId, userAnswers) => {
 try {
    const resp = await axios.post(`${BASE_URL}/users/${userId}/answers`, userAnswers);
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
};

const updatedAnswer = async (userId, userAnswers) => {
 try {
    const resp = await axios.put(`${BASE_URL}/users/${userId}/answers`, userAnswers);
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
   }
};

export {
  intakeUser,
  postAnswer,
  updatedAnswer
}
