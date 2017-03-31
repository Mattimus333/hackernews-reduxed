import React from 'react';

import './Search.css';

const Search = ({ value, children }) => {
  return (
    <form>
      <input
        type="text"
        value={value}
        className="Search-input"
      />
      <button
        type="submit"
        className="Search-button">
        {children}
      </button>
    </form>
  );
};

export default Search;
