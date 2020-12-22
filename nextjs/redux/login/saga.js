import { takeLatest, call, put } from 'redux-saga/effects';
import { sendCSRFRequest, sendLoginRequest } from './service';
import { SEND_LOGIN_REQUEST } from './constants';
import { sendLoginResult } from './actions';

export function* handleLogin(action) {
  try {
    yield call(sendCSRFRequest);
    const response = yield call(sendLoginRequest, action.payloads);
    yield put(sendLoginResult(response));
  } catch (errors) {
    console.log(errors);
  }
}

export function* loginSaga() {
  yield takeLatest(SEND_LOGIN_REQUEST, handleLogin);
}
