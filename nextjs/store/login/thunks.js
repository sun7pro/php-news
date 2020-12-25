import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  sendCSRFRequest,
  sendLoginRequest,
  sendLogoutRequest,
} from './services';

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

export const doLogout = createAsyncThunk(
  'login/handleLogout',
  async (_, thunkAPI) => {
    try {
      const response = await sendLogoutRequest();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
