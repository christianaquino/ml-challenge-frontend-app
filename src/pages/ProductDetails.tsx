import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../services/itemsService';

function ProductDetails() {
  const params = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    getDetails(params.id as string).then((res) => setDetails(res));
  }, []);

  return (
    <>
      <div>Product Details</div>
      <div>{JSON.stringify(details)}</div>
    </>
  );
}

export default ProductDetails;
