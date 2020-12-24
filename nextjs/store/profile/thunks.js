import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetProfile } from './services';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (_, thunkAPI) => {
    try {
      const response = await sendGetProfile();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
