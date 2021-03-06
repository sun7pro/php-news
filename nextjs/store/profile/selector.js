import { createSelector } from '@reduxjs/toolkit';

export const selectProfile = createSelector(
  state => ({
    profile: state.profile.profile,
    isLoading: state.profile.isLoading,
  }),
  state => state,
);
