import Request from '../../services/APIService';
import { LOGIN_URL, LOGOUT_URL } from '../../constants';

export const sendCSRFRequest = () =>
  Request.get({
    url: `${process.env.CSRF_COOKIE_URL}`,
  });

export const sendLoginRequest = credentials =>
  Request.post({
    url: LOGIN_URL,
    data: credentials,
  });

export const sendLogoutRequest = () =>
  Request.post({
    url: LOGOUT_URL,
  });
