import { render } from '@testing-library/react';
import { ClassAttributes, AnchorHTMLAttributes } from 'react';
import ItemList from '.';
import { IItem } from '../../types/item';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  Link: (
    // eslint-disable-next-line no-undef
    props: JSX.IntrinsicAttributes
      & ClassAttributes<HTMLAnchorElement>
      & AnchorHTMLAttributes<HTMLAnchorElement>,
  ) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a {...props}>
      { // eslint-disable-next-line react/destructuring-assignment
          props.children
        }
    </a>
  ),
}));
describe('ItemList component', () => {
  test('renders correctly', () => {
    const item1: IItem = {
      id: 'MLC8752432',
      picture: '//item.jpg',
      title: 'IPhone 12',
      price: {
        amount: 650000,
        currency: 'CLP',
      },
      condition: 'Nuevo',
      free_shipping: true,
    };

    const item2 = { ...item1, id: 'MLC8752433' };
    const item3 = { ...item1, id: 'MLC8752434', free_shipping: false };
    const { asFragment } = render(<ItemList items={[item1, item2, item3]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
