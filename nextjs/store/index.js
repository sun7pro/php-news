import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/slice';
import profileReducer from './profile/slice';

export default configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
  devTools: true,
});
