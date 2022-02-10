import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import Breadcrum from '../components/Breadcrumb';
import { searchItems } from '../services/itemsService';
import { SearchContext } from '../providers/SearchContextProvider';

function SearchResult() {
  const { setSearchData } = useContext(SearchContext) as any;
  const { search } = useLocation();
  const [categories, setCategories] = useState([]);
  const [items, setItems]: any[] = useState([]);
  const query: string = qs.parse(search, { ignoreQueryPrefix: true }).search as string;

  useEffect(() => {
    searchItems(query).then(
      (res) => {
        setCategories(res.categories);
        setItems(res.items);
        setSearchData({ query, categories: res.categories });
      },
    );
  }, [query]);

  return (
    <>
      <Breadcrum categories={categories} />
      <SearchBar searchText={query} />
      <ItemList items={items} />
    </>

  );
}

export default SearchResult;
