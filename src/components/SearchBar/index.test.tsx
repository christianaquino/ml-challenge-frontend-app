import { render, fireEvent } from '@testing-library/react';
import SearchBar from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
  Link: props => <a { ...props}>{props.children}</a>
}));

describe('SearchBar component', () => {
  test('renders correctly', () => {
    const { container, asFragment } = render(<SearchBar />);

    expect(asFragment()).toMatchSnapshot()
  });

  test('navigates to search results', () => {
    const { container } = render(<SearchBar />);
    const searchInput = container.querySelector('.searchbar--textinput');
    const searchButton = container.querySelector('.searchbar--button');

    fireEvent.change(searchInput, { target: {value: 'iphone'}} )
    fireEvent.click(searchButton)

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=iphone')
  });
});
