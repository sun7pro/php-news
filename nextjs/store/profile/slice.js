import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from './thunks';

const loginSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
  },
  reducers: {},
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      state.profile = { ...action.payload };
    },
  },
});

export default loginSlice.reducer;
