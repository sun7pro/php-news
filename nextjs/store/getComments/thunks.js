import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetCommentsRequest } from './services';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (postId, thunkAPI) => {
    try {
      const response = await sendGetCommentsRequest(postId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
