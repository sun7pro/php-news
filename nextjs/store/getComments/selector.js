import { createSelector } from '@reduxjs/toolkit';

export const selectGetComments = createSelector(
  state => ({
    comments: state.getComments.comments,
    currentPage: state.getComments.currentPage,
    pageTotal: state.getComments.pageTotal,
  }),
  state => state,
);
