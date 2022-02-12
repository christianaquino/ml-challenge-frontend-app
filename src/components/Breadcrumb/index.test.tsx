import { render } from '@testing-library/react';
import BreadCrumb from '.';

describe('BreadCrumb component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<BreadCrumb categories={['cat1', 'cat2', 'cat3']} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
