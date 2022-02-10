import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './styles.scss';

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
    <header className="searchbar">
      <div className="searchbar--container">
        <Link to="/" aria-label="volver al inicio" className="searchbar--backbutton">
          <img src="/assets/Logo_ML.png" className="searchbar--logo" alt="logo" />
        </Link>
        <input type="text" value={query} onChange={handleChange} placeholder="Nunca dejes de buscar" className="searchbar--textinput" />
        <button type="button" onClick={handleClick} className="searchbar--button" aria-label="buscar">
          <img src="/assets/ic_Search.png" alt="icono buscar" />
        </button>
      </div>
    </header>
  );
}

SearchBar.defaultProps = defaultProps;

export default SearchBar;
