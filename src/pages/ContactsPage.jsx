import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
import { Loader } from 'components/Loader/Loader'
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestContactsThunk } from 'redux/contactsOperations'
import { selectContactsList, selectError, selectIsLoading } from 'redux/selectors'
import { TitleH2 } from './ContactsPage.styled'

const ContactsPage = () => {
    const contacts = useSelector(selectContactsList);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestContactsThunk());
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
            {isLoading && !error && <Loader />}
            <ContactList />
          </>
        )}
      </div>
  )
}

export default ContactsPage;