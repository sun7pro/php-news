import Request from '../../services/APIService';

export const sendGetProfile = () =>
  Request.get({
    url: `${process.env.BASE_URL_API}/profile`,
  });
