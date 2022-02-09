import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ISearchBarProps {
  searchText?: string
}

const defaultProps: ISearchBarProps = {
  searchText: '',
};

function SearchBar({ searchText }: ISearchBarProps) {
  const [query, setQuery] = useState(searchText);
  const navigate = useNavigate();

  const handleClick = () => navigate(`/items?search=${query}`);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

SearchBar.defaultProps = defaultProps;

export default SearchBar;
