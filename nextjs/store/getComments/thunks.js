import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetCommentsRequest } from './services';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (condition, thunkAPI) => {
    try {
      const response = await sendGetCommentsRequest(condition);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
