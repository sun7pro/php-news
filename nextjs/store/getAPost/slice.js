import { createSlice } from '@reduxjs/toolkit';
import { doGetAPost } from './thunks';

const getAPostSlice = createSlice({
  name: 'getAPost',
  initialState: {
    isLoading: false,
    post: {},
  },
  extraReducers: {
    [doGetAPost.pending]: state => {
      state.isLoading = true;
      delete state.errors;
    },
    [doGetAPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload.post;
    },
    [doGetAPost.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = getAPostSlice.actions;

export default getAPostSlice.reducer;
