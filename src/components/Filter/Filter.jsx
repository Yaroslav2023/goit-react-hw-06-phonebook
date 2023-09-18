import React, { useContext } from 'react';
import { Context } from 'context/contactContext';

const Filter = () => {
  const { filter, setFilter } = useContext(Context);

  const filteredContacts = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <label>
      Find contacts by name:
      <br />
      <input
        type="text"
        placeholder="Find..."
        value={filter}
        onChange={filteredContacts}
      />
    </label>
  );
};

export default Filter;
