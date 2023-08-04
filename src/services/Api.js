import axios from 'axios';
import PropTypes from 'prop-types';
// import { DEFAULTS_URL } from 'redux/data';

axios.defaults.baseURL = 'https://64c6c32a0a25021fde91eef7.mockapi.io';

export const fetchGetContacts = async newContact => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const fetchAddContacts = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const fetchDelContacts = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

fetchAddContacts.propTypes = {
  newContact: PropTypes.object.isRequired,
};
fetchDelContacts.propTypes = {
  contactId: PropTypes.string.isRequired,
};
