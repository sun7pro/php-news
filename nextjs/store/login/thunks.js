import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendCSRFRequest, sendLoginRequest } from './services';

export const doLogin = createAsyncThunk(
  'login/handleLogin',
  async (credentials, thunkAPI) => {
    try {
      await sendCSRFRequest();
      const response = await sendLoginRequest(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
