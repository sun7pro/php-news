import { createSelector } from '@reduxjs/toolkit';

export const selectGetAPost = createSelector(
  state => ({
    isLoading: state.getAPost.isLoading,
    post: state.getAPost.post,
  }),
  state => state,
);
