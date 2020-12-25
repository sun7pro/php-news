import { createSlice } from '@reduxjs/toolkit';
import { doLogin } from './thunks';
import { deleteAllCookies } from '../../services/cookie';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    isSignedIn: false,
    message: '',
  },
  reducers: {
    updateSignedInStatus: (state, action) => {
      state.isSignedIn = action.payload;
      console.log(action.payload, typeof action.payload);
      if (state.isSignedIn) {
        localStorage.setItem('P-IS_SIGNED_IN', state.isSignedIn);
      } else {
        localStorage.removeItem('P-IS_SIGNED_IN', state.isSignedIn);
        deleteAllCookies();
      }
    },
  },
  extraReducers: {
    [doLogin.pending]: state => {
      state.isLoading = true;
      delete state.message;
    },
    [doLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignedIn = action.payload.isSignedIn;
      state.message = '';
      if (action.payload.isSignedIn) {
        localStorage.setItem('P-IS_SIGNED_IN', state.isSignedIn);
      } else {
        localStorage.removeItem('P-IS_SIGNED_IN', state.isSignedIn);
      }
    },
    [doLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignedIn = action.payload.isSignedIn;
      state.message = action.payload.message;
    },
  },
});

export const { updateSignedInStatus } = loginSlice.actions;

export default loginSlice.reducer;
