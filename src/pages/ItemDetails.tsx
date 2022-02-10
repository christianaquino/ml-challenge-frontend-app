import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../services/itemsService';
import SearchBar from '../components/SearchBar';
import Details from '../components/Details';

function ItemDetails() {
  const params = useParams();
  const [itemDetails, setitemDetails] = useState();

  useEffect(() => {
    getDetails(params.id as string).then(
      ({ item }) => setitemDetails(item),
    );
  }, []);

  return (
    <>
      <SearchBar />
      {itemDetails && <Details item={itemDetails} />}
    </>
  );
}

export default ItemDetails;
