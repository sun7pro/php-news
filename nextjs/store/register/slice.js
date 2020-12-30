import { createSlice } from '@reduxjs/toolkit';
import { doRegister } from './thunks';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: false,
    errors: [],
  },
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.errors = [];
    },
  },
  extraReducers: {
    [doRegister.pending]: state => {
      state.isLoading = true;
      delete state.errors;
    },
    [doRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.errors && action.payload.errors;
    },
    [doRegister.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = registerSlice.actions;

export default registerSlice.reducer;
