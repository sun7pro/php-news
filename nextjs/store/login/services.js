import Request from '../../services/APIService';

export const sendCSRFRequest = () =>
  Request.get({
    url: `${process.env.CSRF_COOKIE_URL}`,
  });

export const sendLoginRequest = credentials =>
  Request.post({
    url: `${process.env.LOGIN_URL}`,
    data: credentials,
  });

export const sendLogoutRequest = () =>
  Request.post({
    url: `${process.env.LOGOUT_URL}`,
  });
