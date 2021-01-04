import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendAddPostRequest } from './services';

export const addPost = createAsyncThunk(
  'post/createPost',
  async (post, thunkAPI) => {
    try {
      const response = await sendAddPostRequest(post);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
