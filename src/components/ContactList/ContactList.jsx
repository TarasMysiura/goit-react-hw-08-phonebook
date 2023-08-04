import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Ul } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Ul>
      <Contact visibleContacts={visibleContacts} />
    </Ul>
  );
};
