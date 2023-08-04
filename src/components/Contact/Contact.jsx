import React from 'react';
import { Button, Li, NumberSpan, Span } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDelContactsThunk } from 'redux/contactsOperations';

export const Contact = ({ visibleContacts }) => {
  const dispatch = useDispatch();

  const onRemoveContact = contactId => {
    dispatch(fetchDelContactsThunk(contactId));
  };

  return visibleContacts.map(({ id, name, phone }) => (
    <Li key={id}>
      <Span>{name}:</Span>
      <NumberSpan>{phone}</NumberSpan>
      <Button type="button" onClick={() => onRemoveContact(id)}>
        Delete
      </Button>
    </Li>
  ));
};

Contact.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
