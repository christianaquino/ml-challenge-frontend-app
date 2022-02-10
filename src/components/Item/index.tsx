import { Link } from 'react-router-dom';
import './styles.scss';

function Item({ item }: any) {
  return (
    <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }} className="item">
      <div className="item--imagecontainer">
        <img src={item.picture} alt={item.title} className="item--image" />
      </div>
      <div className="item--price">{`${item.price.currency} ${item.price.amount}`}</div>
      <div className="item--title">{item.title}</div>
      <div className="item--condition">{item.condition}</div>
      { item.free_shipping && <div className="item--shipping-free">Envío Gratis</div>}
    </Link>
  );
}

export default Item;
