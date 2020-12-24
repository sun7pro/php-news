import Request from '../../services/APIService';

export const sendGetProfile = () =>
  Request.get({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/profile`,
  });
