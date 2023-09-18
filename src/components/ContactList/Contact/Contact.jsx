import React, { useContext } from 'react';
import cl from './contact.module.css';
import { Context } from '../../../context/contactContext';

const Contact = () => {
  const { contacts, setContacts, findContacts } = useContext(Context);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return findContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={cl.item}>
        <span>
          {name}: {number}
        </span>{' '}
        <button
          type="button"
          className={cl.btn}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
