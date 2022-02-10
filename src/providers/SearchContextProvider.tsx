import {
  createContext, ReactNode, useMemo, useState,
} from 'react';

interface ISearchContextProviderProps {
  children: ReactNode
}

// create a context, with createContext api
export const SearchContext = createContext({});

function SearchContextProvider({ children }: ISearchContextProviderProps) {
  const [searchData, setSearchData] = useState({});
  const value = useMemo(() => ({ searchData, setSearchData }), [searchData]);

  return (
    // this is the provider providing state
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
