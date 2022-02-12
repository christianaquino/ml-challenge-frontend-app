import { render, fireEvent } from '@testing-library/react';
import { ClassAttributes, AnchorHTMLAttributes } from 'react';
import SearchBar from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
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

describe('SearchBar component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<SearchBar />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('navigates to search results', () => {
    const { container } = render(<SearchBar />);
    const searchInput: Element | null = container.querySelector('.searchbar--textinput');
    const searchButton: Element | null = container.querySelector('.searchbar--button');

    if (searchInput && searchButton) {
      fireEvent.change(searchInput, { target: { value: 'iphone' } });
      fireEvent.click(searchButton);
    }

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=iphone');
  });
});
