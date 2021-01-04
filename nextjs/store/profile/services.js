import Request from '../../services/APIService';

export const sendGetProfile = () =>
  Request.get({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL_VER_1}/profile`,
  });
