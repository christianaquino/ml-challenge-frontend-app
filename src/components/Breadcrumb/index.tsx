import './styles.scss';

interface IBreadcrumbProps {
    categories: string[]
}

function Breadcrumb({ categories }: IBreadcrumbProps) {
  const itemList = categories.map((category) => <li className="breadcrumb--item">{category}</li>);
  return (
    <nav className="breadcrumb">
      <ol className="breadcrumb--items">{itemList}</ol>
    </nav>
  );
}

export default Breadcrumb;
