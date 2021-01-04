import Request from '../../services/APIService';

export const sendRegisterRequest = information =>
  Request.post({
    url: `${process.env.BASE_URL_API}/register`,
    data: information,
  });
