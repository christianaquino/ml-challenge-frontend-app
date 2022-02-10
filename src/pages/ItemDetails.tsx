import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../services/itemsService';
import SearchBar from '../components/SearchBar';
import Details from '../components/Details';
import { SearchContext } from '../providers/SearchContextProvider';
import Breadcrumb from '../components/Breadcrumb';

function ItemDetails() {
  const params = useParams();
  const { searchData } = useContext(SearchContext) as any;

  const [itemDetails, setitemDetails] = useState();

  useEffect(() => {
    getDetails(params.id as string).then(
      ({ item }) => setitemDetails(item),
    );
  }, []);

  return (
    <>
      <SearchBar searchText={searchData.query} />
      <Breadcrumb categories={searchData.categories || []} />
      {itemDetails && <Details item={itemDetails} />}
    </>
  );
}

export default ItemDetails;
