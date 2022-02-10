import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import SearchBar from '../components/SearchBar';
import { searchItems } from '../services/itemsService';

function SearchResult() {
  const { search } = useLocation();
  const [results, setResults] = useState();
  const query: string = qs.parse(search, { ignoreQueryPrefix: true }).search as string;

  useEffect(() => {
    searchItems(query).then((res) => setResults(res));
  }, [query]);

  return (
    <>
      <SearchBar searchText={query} />
      <div>
        Product List:
      </div>
      <div>
        {JSON.stringify(results)}
      </div>
    </>

  );
}

export default SearchResult;
