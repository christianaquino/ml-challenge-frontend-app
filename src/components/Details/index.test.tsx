import { render } from '@testing-library/react';
import Details from '.';
import { IItemDetails } from '../../types/item';

describe('Details component', () => {
  test('Renders correctly', () => {
    const itemDetails: IItemDetails = {
      id: 'MLC8752432',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
                          + 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
                          + 'a type specimen book',
      title: 'IPhone 12 Pro',
      sold_quantity: 20,
      free_shipping: true,
      price: {
        currency: 'CLP',
        amount: 1560000,
      },
      condition: 'Nuevo',
      picture: '//iphone.jpg',
    };

    const { asFragment } = render(<Details itemDetails={itemDetails} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
