import Item from '../Item';
import './styles.scss';

interface IItemListProps {
    items: any[]
}

function ItemList({ items }: IItemListProps) {
  return (
    <div className="itemlist">
      {items.map((item: any) => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default ItemList;
