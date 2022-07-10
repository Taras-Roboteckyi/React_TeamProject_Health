import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfAPI from '../../services/Api-heroku';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactShelfAPI.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
