import { all, call } from 'redux-saga/effects';
import { loginSaga } from './login/saga';

export default function* rootSaga() {
  yield all([call(loginSaga)]);
}
