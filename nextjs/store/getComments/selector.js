import { createSelector } from '@reduxjs/toolkit';

export const selectGetComments = createSelector(
  state => ({
    comments: state.getComments.comments,
  }),
  state => state,
);
