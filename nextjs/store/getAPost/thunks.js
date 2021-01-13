import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetAPostRequest } from './services';

export const doGetAPost = createAsyncThunk(
  'post/getAPost',
  async (postId, thunkAPI) => {
    try {
      const response = await sendGetAPostRequest(postId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
