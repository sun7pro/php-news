import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendGetPostsRequest } from './services';

export const getPosts = createAsyncThunk(
  'post/createPost',
  async (filter, thunkAPI) => {
    try {
      const response = await sendGetPostsRequest(filter);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
