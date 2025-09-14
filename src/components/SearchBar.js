import React from 'react';
import { Link } from 'react-router-dom';

 const SearchBar = ({ showSearchBar, closeSearchBar }) => {
  return (
    <div className={showSearchBar ? 'search-bar active' : 'search-bar'}>
      <input type="text" placeholder="Search..." />
      <button className = 'go'>Go</button>
      <Link to = '/cancel'> 
      <button className = 'cancel' onClick={closeSearchBar}>Cancel</button>
      </Link>
    </div>
  );
};
export default SearchBar;

