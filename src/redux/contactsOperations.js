import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchAddContacts,
  fetchDelContacts,
  fetchGetContacts,
} from 'services/Api';

axios.defaults.baseURL = 'https://64c6c32a0a25021fde91eef7.mockapi.io';

export const fetchGetContactsThunk = createAsyncThunk(
  'contacts/fetchGetContactsThunk',
  async (_, thunkAPI) => {
    try {
      const data = await fetchGetContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContactsThunk = createAsyncThunk(
  'contacts/fetchAddContactsThunk',
  async (newContact, thunkAPI) => {
    try {
      const data = await fetchAddContacts(newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDelContactsThunk = createAsyncThunk(
  'contacts/fetchDelContactsThunk',
  async (contactId, thunkAPI) => {
    try {
      const data = await fetchDelContacts(contactId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
