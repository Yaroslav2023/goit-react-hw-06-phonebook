import React, { useContext } from 'react';
import cl from './contactForm.module.css';
import { nanoid } from 'nanoid';
import { Context } from '../../context/contactContext';

const ContactForm = () => {
  const { name, setName, number, setNumber, contacts, setContacts } =
    useContext(Context);

  const handleSubmitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, newContact]);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={cl.form} onSubmit={handleSubmitForm}>
      <label className={cl.inputItem}>
        Name <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            setName(e.currentTarget.value);
          }}
          id={nanoid()}
          pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={cl.inputItem}>
        Number
        <br />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => {
            setNumber(e.currentTarget.value);
          }}
          pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="123-45-67"
          required
        />
      </label>
      <button type="submit" className={cl.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
