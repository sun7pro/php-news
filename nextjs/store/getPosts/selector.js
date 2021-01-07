import { createSelector } from '@reduxjs/toolkit';

export const selectGetPosts = createSelector(
  state => ({
    isLoading: state.getPosts.isLoading,
    response: state.getPosts.response,
  }),
  state => state,
);
