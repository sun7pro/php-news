import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from './thunks';

const getPostsSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: false,
    response: {
      current_page: 1,
      page_total: 1,
      post_total: 0,
      posts: [],
    },
  },
  extraReducers: {
    [getPosts.pending]: state => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
    [getPosts.rejected]: state => {
      state.response = [];
      state.isLoading = false;
    },
  },
});

export default getPostsSlice.reducer;
