import { createSelector } from 'reselect';

const selectLogin = state => {
  return state.login;
};

export const selectIsLoginSuccess = createSelector(
  [selectLogin],
  login => login.isLoginSuccess,
);

export const selectIsLoading = createSelector(
  [selectLogin],
  login => login.isLoading,
);

export const selectMessage = createSelector(
  [selectLogin],
  login => login.message,
);
