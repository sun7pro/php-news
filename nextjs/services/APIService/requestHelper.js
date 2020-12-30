import axios from 'axios';

axios.defaults.withCredentials = true;

export default function requestHelper({ method, options }) {
  return axios({
    ...options,
    method,
  })
    .then(response => response.data)
    .catch(err => err.response.data);
};
