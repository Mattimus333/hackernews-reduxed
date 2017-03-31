import React from 'react';

import './Search.css';

const Search = ({ children }) => {
  return (
    <form>
      <input
        type="text"
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
