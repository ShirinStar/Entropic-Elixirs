const axios = require('axios');
const BASE_URL = 'http://localhost:3001';

const intakeUser = async(data) => {
  try {
    const { user_age, user_gender } = data;
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

// const getUser = async (id) => {
//   const resp = await axios.get(`${BASE_URL}/users/${id}`)
//   });
//   console.log(resp.data);
//   return resp.data
// }

// const postAnswer = async (id) => {
//   const resp = await axios.post(`${BASE_URL}/users/${id}/answers`, {
//   answer_antropy,
  // answer_flow,
  // answer_openness,
  // answer_sum
// });
//   console.log(resp.data);
//   return resp.data
// }

export {
  intakeUser
}
