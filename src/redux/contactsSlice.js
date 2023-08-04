import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContactsThunk,
  fetchDelContactsThunk,
  fetchGetContactsThunk,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      //!=====================Get Contact====================
      .addCase(fetchGetContactsThunk.pending, handlePending)
      .addCase(fetchGetContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchGetContactsThunk.rejected, handleRejected)
      //!=====================Add Contact====================
      .addCase(fetchAddContactsThunk.pending, handlePending)
      .addCase(fetchAddContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(fetchAddContactsThunk.rejected, handleRejected)
      //!=====================Delete Contact====================
      .addCase(fetchDelContactsThunk.pending, handlePending)
      .addCase(fetchDelContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(fetchDelContactsThunk.rejected, handleRejected),
});

export const { addContact, removeContact, setIsLoading, setError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
