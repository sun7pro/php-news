import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/slice';
import profileReducer from './profile/slice';
import registerReducer from './register/slice';
import addPostReducer from './addPost/slice';
import getPostsReducer from './getPosts/slice';
import getAPostReducer from './getAPost/slice';
import addCommentReducer from './addComment/slice';
import getComentsReducer from './getComments/slice';

export default configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
    addPost: addPostReducer,
    getPosts: getPostsReducer,
    getAPost: getAPostReducer,
    addComment: addCommentReducer,
    getComments: getComentsReducer,
  },
  devTools: true,
});
