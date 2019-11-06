import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

//Create initial state
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Mary Smith',
        email: 'smith@gmail.com',
        phone: '223-223-2223',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Karl White',
        email: 'karl@gmail.com',
        phone: '122-122-1222',
        type: 'professional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  };
  // Set current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT}) // no payload, setting up to null
  }

  // Update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  };


  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent
    }}>
      {props.children}
    </ContactContext.Provider>
  )

}

export default ContactState