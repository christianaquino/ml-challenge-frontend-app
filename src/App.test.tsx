import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('has main layout', () => {
    const { container } = render(<App />);
    const layoutElement = container.querySelector('div');

    expect(layoutElement).toBeInTheDocument();
    expect(layoutElement).toHaveClass('layout');
  });
});
