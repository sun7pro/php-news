import { createSlice } from '@reduxjs/toolkit';
import { addComment } from './thunks';

const addCommentSlice = createSlice({
  name: 'comment',
  initialState: {
    isLoading: false,
  },
  extraReducers: {
    [addComment.pending]: state => {
      state.isLoading = true;
      delete state.errors;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.errors;
    },
    [addComment.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default addCommentSlice.reducer;
