import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendAddCommentRequest } from './services';

export const addComment = createAsyncThunk(
  'comment/createComment',
  async (comment, thunkAPI) => {
    try {
      const response = await sendAddCommentRequest(comment);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);
