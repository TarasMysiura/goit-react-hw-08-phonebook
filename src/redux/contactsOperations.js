// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import {
//   fetchAddContacts,
//   fetchDelContacts,
//   fetchGetContacts,
// } from 'services/Api';

// axios.defaults.baseURL = 'https://64c6c32a0a25021fde91eef7.mockapi.io';

// export const fetchGetContactsThunk = createAsyncThunk(
//   'contacts/fetchGetContactsThunk',
//   async (_, thunkAPI) => {
//     try {
//       const data = await fetchGetContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchAddContactsThunk = createAsyncThunk(
//   'contacts/fetchAddContactsThunk',
//   async (newContact, thunkAPI) => {
//     try {
//       const data = await fetchAddContacts(newContact);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchDelContactsThunk = createAsyncThunk(
//   'contacts/fetchDelContactsThunk',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await fetchDelContacts(contactId);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from 'services/data';

export const requestContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await $instance.post('/contacts', contactData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $instance.patch(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
