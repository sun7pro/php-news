import { createSlice } from '@reduxjs/toolkit';
import { getComments } from './thunks';

const getCommentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  extraReducers: {
    [getComments.pending]: () => {},
    [getComments.fulfilled]: (state, action) => {
      action.payload.comments && (
        state.comments = action.payload.comments
      );
    },
    [getComments.rejected]: state => {
      state.comments = [];
    },
  },
});

export default getCommentsSlice.reducer;
