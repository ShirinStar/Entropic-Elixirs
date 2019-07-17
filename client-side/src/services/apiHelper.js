const axios = require('axios');
const BASE_URL = 'http://localhost:3001';
const BASE_WS = 'https://dummy-rest-api.glitch.me/user'
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

const getUserId = async(token) => {
  try {
    const resp = await axios.post(`${BASE_WS}`, {
      "token": token
    })
   //    , {
   //    headers: {
   //    Authorization: `Bearer ${token}`
   //   }
   // });
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
  }
};


const postUserId = async(user_id) => {
  try {
    const resp = await axios.post(`${BASE_URL}/users/login`, {
      user_id
    });
    console.log(resp.data);
    return resp.data
  } catch(error) {
    console.log(error);
  }
};

// const loginWS = async(token) => {
//   try {
//     const resp = await axios.post(`${BASE_WS}`, {
//       "token": token
//     });
//     console.log(resp.data);
//     return resp.data
//   } catch(error) {
//     console.log(error);
//   }
// };

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
  // loginWS,
  postUserId,
  getUserId
}
