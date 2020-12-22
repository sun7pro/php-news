import axios from 'axios';

export const sendLoginRequest = ({ usernameOrEmail, password }) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
      usernameOrEmail,
      password,
    })
    .then(response => response.data)
    .catch(err => err.response.data);
};

export const sendCSRFRequest = () => {
  axios.defaults.withCredentials = true;
  axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`);
};
