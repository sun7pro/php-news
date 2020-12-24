import { createSlice } from '@reduxjs/toolkit';
import { doLogin } from './thunks';
import { setCookie } from '../../services/cookie';

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
      state.message = action.payload.message;
      setCookie('P-IS_SIGNED_IN', state.isSignedIn, 7);
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
