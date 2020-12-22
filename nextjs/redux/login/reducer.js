import { SEND_LOGIN_REQUEST, SEND_LOGIN_RESULT } from './constants';

const initialState = {
  isLoading: false,
  isLoginSuccess: false,
  message: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        message: '',
      };
    case SEND_LOGIN_RESULT:
      const { isLoginSuccess, message } = action.payloads;
      return {
        ...state,
        isLoading: false,
        isLoginSuccess,
        message,
      };
    default:
      return state;
  }
};

export default loginReducer;
