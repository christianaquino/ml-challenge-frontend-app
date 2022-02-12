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
    const fetchData = async () => {
      const data = await searchItems(query) as any;
      setCategories(data.categories);
      setItems(data.items);
      setSearchData({ query, categories: data.categories });
    };

    fetchData();
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
