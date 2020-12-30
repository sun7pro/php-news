import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendRegisterRequest } from './services';

export const doRegister = createAsyncThunk(
  'register/handleRegister',
  async (information, thunkAPI) => {
    try {
      const response = await sendRegisterRequest(information);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
