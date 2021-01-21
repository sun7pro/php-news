import { createSlice } from '@reduxjs/toolkit';
import { getComments } from './thunks';

const getCommentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    currentPage: 1,
    pageTotal: 1,
  },
  extraReducers: {
    [getComments.pending]: () => {},
    [getComments.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        state.comments = action.payload.comments;
        state.currentPage = action.payload.current_page;
        state.pageTotal = action.payload.page_total;
      }
    },
    [getComments.rejected]: state => {
      state.comments = [];
    },
  },
});

export default getCommentsSlice.reducer;
