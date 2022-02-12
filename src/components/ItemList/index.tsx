import Item from '../Item';
import { IItem } from '../../types/item';

import './styles.scss';

interface IItemListProps {
    items: IItem[]
}

function ItemList({ items }: IItemListProps) {
  return (
    <div className="itemlist">
      {items.map((item: IItem) => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default ItemList;
