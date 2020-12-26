import Request from '../../services/APIService';

export const sendCSRFRequest = () =>
  Request.get({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`,
  });

export const sendLoginRequest = credentials =>
  Request.post({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
    data: credentials,
  });

export const sendLogoutRequest = () =>
  Request.post({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
  });
