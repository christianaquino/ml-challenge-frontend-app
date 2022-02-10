import React from 'react';
import './styles.scss';

function Item({ item }: any) {
  return (
    <div className="item">
      <img src={item.picture} alt="" className="item--image" />
      <div className="item--price">{`${item.price.currency} ${item.price.amount}`}</div>
      <div className="item--title">{item.title}</div>
      <div className="item--condition">{item.condition}</div>
      { item.free_shipping && <div className="item--shipping-free">Envío Gratis</div>}
    </div>
  );
}

export default Item;
