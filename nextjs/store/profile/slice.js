import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from './thunks';

const loginSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    profile: null,
  },
  reducers: {},
  extraReducers: {
    [getProfile.pending]: state => {
      state.isLoading = true;
      delete state.message;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload.user ? { ...action.payload.user } : null;
    },
    [getProfile.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default loginSlice.reducer;
