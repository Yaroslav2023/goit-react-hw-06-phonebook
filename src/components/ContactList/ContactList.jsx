import React from 'react';
import cl from './contactList.module.css';
import Contact from './Contact';

const ContactList = () => {
  return (
    <ul className={cl.list}>
      <Contact />
    </ul>
  );
};

export default ContactList;
