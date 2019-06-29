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

// const getUser = async (id) => {
//   const resp = await axios.get(`${BASE_URL}/users/${id}`)
//   });
//   console.log(resp.data);
//   return resp.data
// }

const postAnswer = async (id) => {
  const resp = await axios.post(`${BASE_URL}/users/${id}/answers`, {
  answer_breaking,
  answer_building,
  answer_with_it,
  answer_against_it,
  answer_intuition,
  answer_intention,
  answer_entropy_sum,
  answer_flow_sum,
  answer_openness_sum
});
  console.log(resp.data);
  return resp.data
}

export {
  intakeUser,
  postAnswer
}
