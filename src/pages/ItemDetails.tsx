import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../services/itemsService';
import SearchBar from '../components/SearchBar';
import Details from '../components/Details';
import Breadcrumb from '../components/Breadcrumb';
import { SearchContext } from '../providers/SearchContextProvider';

function ItemDetails() {
  const params = useParams();
  const { searchData } = useContext(SearchContext) as any;
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { item } = await getDetails(params.id as string);
      setItemDetails(item);
    };

    fetchData();
  }, []);

  return (
    <>
      <SearchBar searchText={searchData.query} />
      <Breadcrumb categories={searchData.categories || []} />
      { itemDetails && <Details itemDetails={itemDetails} /> }
    </>
  );
}

export default ItemDetails;
