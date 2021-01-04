import Request from '../../services/APIService';

export const sendRegisterRequest = information =>
  Request.post({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL_VER_1}/register`,
    data: information,
  });
