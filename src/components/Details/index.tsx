import '../../global.scss';
import './styles.scss';

interface IDetailsProps {
    item: any
}

function Details({ item }: IDetailsProps) {
  return (
    <div className="details">
      <div className="details--imagecontainer">
        <img className="details--image" src={item.picture} alt={item.title} />
      </div>
      <div className="details--condition">{`${item.condition} - ${item.sold_quantity} vendidos`}</div>
      <div className="details--title">{item.title}</div>
      <div className="details--price">{`${item.price.currency} ${item.price.amount}`}</div>
      <button type="button" className="button-primary details--buybutton">Comprar</button>
      <div className="details--titledesc">Descripción del producto</div>
      <div className="details--description">{item.description}</div>
    </div>
  );
}

export default Details;
