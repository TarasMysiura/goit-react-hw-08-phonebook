import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './ContactList/ContactList';
import { TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchGetContactsThunk } from 'redux/contactsOperations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchGetContactsThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 50,
      }}
    >
      <PhonebookForm title="Phonebook"></PhonebookForm>
      <TitleH2>Contacts</TitleH2>

      {contacts.length > 0 && (
        <>
          <Filter />
          {isLoading && !error && <Loader/>}
          <ContactList />
        </>
      )}
      <ToastContainer />
    </div>
  );
};
