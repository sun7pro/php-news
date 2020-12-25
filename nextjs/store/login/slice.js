import { createSlice } from '@reduxjs/toolkit';
import { doLogin, doLogout } from './thunks';

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
      handleLocalStorage(state.isSignedIn);
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
      handleLocalStorage(state.isSignedIn);
      state.message = state.isSignedIn ? '' : action.payload.message;
    },
    [doLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignedIn = action.payload.isSignedIn;
      state.message = action.payload.message;
    },
    [doLogout.pending]: state => {
      state.isLoading = true;
      delete state.message;
    },
    [doLogout.fulfilled]: state => {
      state.isLoading = false;
      state.isSignedIn = false;
      handleLocalStorage(false);
    },
    [doLogout.rejected]: state => {
      state.isLoading = false;
    },
  },
});

const handleLocalStorage = isSignedIn => {
  if (isSignedIn) {
    localStorage.setItem('P-IS_SIGNED_IN', true);
  } else {
    localStorage.removeItem('P-IS_SIGNED_IN');
  }
};

export const { updateSignedInStatus } = loginSlice.actions;

export default loginSlice.reducer;
