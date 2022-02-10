import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import { searchItems } from '../services/itemsService';

function SearchResult() {
  const { search } = useLocation();
  const [categories, setCategories] = useState([]);
  const [items, setItems]: any[] = useState([]);
  const query: string = qs.parse(search, { ignoreQueryPrefix: true }).search as string;

  useEffect(() => {
    searchItems(query).then(
      (res) => { setCategories(res.categories); setItems(res.items); },
    );
  }, [query]);

  console.log(items, categories);

  return (
    <>
      <SearchBar searchText={query} />
      <ItemList items={items} />
    </>

  );
}

export default SearchResult;
