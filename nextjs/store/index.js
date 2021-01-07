import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/slice';
import profileReducer from './profile/slice';
import registerReducer from './register/slice';
import addPostReducer from './addPost/slice';
import getPostsReducer from './getPosts/slice';

export default configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
    addPost: addPostReducer,
    getPosts: getPostsReducer,
  },
  devTools: true,
});
