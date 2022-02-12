import { render } from '@testing-library/react';
import { ClassAttributes, AnchorHTMLAttributes } from 'react';
import Item from '.';
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

describe('Item component', () => {
  const item: IItem = {
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
  test('renders correctly itme with free shipping', () => {
    const { asFragment } = render(<Item item={item} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly itme with no free shipping', () => {
    const { asFragment } = render(<Item item={{ ...item, free_shipping: false }} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
