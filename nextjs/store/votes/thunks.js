import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendVotesRequest } from './services';

export const doVotes = createAsyncThunk(
  'votes/handleVotes',
  async information => await sendVotesRequest(information),
);
