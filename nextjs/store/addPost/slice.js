import { createSlice } from '@reduxjs/toolkit';
import { addPost } from './thunks';

const addPostSlice = createSlice({
  name: 'post',
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
    [addPost.pending]: state => {
      state.isLoading = true;
      delete state.errors;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.errors && action.payload.errors;
    },
    [addPost.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { reset } = addPostSlice.actions;

export default addPostSlice.reducer;
