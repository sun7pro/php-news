import { createSelector } from '@reduxjs/toolkit';

export const selectLogin = createSelector(
  state => ({
    isLoading: state.login.isLoading,
    isSignedIn: state.login.isSignedIn,
    message: state.login.message,
  }),
  state => state,
);
