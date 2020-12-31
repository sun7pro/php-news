import { createSelector } from '@reduxjs/toolkit';

export const selectAddPost = createSelector(
  state => ({
    isLoading: state.addPost.isLoading,
    errors: state.addPost.errors,
  }),
  state => state,
);
