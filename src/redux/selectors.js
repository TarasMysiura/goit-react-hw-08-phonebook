import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContactsFilter = state => state.filterContacts.value;

export const selectFilteredContacts = createSelector(
  [
    selectContactsList, 
    selectContactsFilter, 
  ],
  (items, value) => {
    return items?.filter(contact => {
      return contact.name.toLowerCase().includes(value.toLowerCase()) ?? [];
    });
  }
);
