import { IItemDetails } from '../../types/item';

import '../../global.scss';
import './styles.scss';

interface IDetailsProps {
    itemDetails: IItemDetails
}

function Details({ itemDetails }: IDetailsProps) {
  return (
    <div className="details">
      <div className="details--imagecontainer">
        <img className="details--image" src={itemDetails.picture} alt={itemDetails.title} />
      </div>
      <div className="details--condition">{`${itemDetails.condition} - ${itemDetails.sold_quantity} vendidos`}</div>
      <div className="details--title">{itemDetails.title}</div>
      <div className="details--price">{`${itemDetails.price.currency} ${itemDetails.price.amount}`}</div>
      <button type="button" className="button-primary details--buybutton">Comprar</button>
      <div className="details--titledesc">Descripción del producto</div>
      <div className="details--description">{itemDetails.description}</div>
    </div>
  );
}

export default Details;
