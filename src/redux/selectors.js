import { createSelector } from '@reduxjs/toolkit';

export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectAuthentificated = state => state.auth.authentificated;

export const selectContactsList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContactsFilter = state => state.filterContacts.value;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectContactsFilter],
  (items, value) => {
    return items?.filter(contact => {
      return contact.name.toLowerCase().includes(value.toLowerCase()) ?? [];
    });
  }
);
