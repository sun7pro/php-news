import { createSelector } from '@reduxjs/toolkit';

export const selectRegister = createSelector(
  state => ({
    isLoading: state.register.isLoading,
    errors: state.register.errors,
  }),
  state => state,
);
