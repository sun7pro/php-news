import { SEND_LOGIN_REQUEST, SEND_LOGIN_RESULT } from './constants';

export const doLogin = payloads => ({
  type: SEND_LOGIN_REQUEST,
  payloads,
});

export const sendLoginResult = payloads => ({
  type: SEND_LOGIN_RESULT,
  payloads,
});
