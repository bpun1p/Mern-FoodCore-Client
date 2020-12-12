import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import EntryDetails from './EntryDetails';

describe('renders the correct content', () => {
  test('to render the arrow icon', () => {
    const mockurl = '';
    const { getByTestId } = render(<EntryDetails url={mockurl} />);
  
    const arrowIcon = getByTestId('arrow');
    expect(arrowIcon).toHaveAttribute('src', 'right-chev.svg');
    expect(getByTestId('arrow')).not.toBeNull();
  });
  describe('render the correct string for specified url', () => {
    test('url points to the login page', () => {
      const mockurl = '/login';
      const { getByText } = render(<EntryDetails url={mockurl} />);

      expect(getByText("Don't have an account ?")).not.toBeNull();
    });
    test('url points to the signup page', () => {
      const mockurl = '/register';
      const { getByText } = render(<EntryDetails url={mockurl} />);

      expect(getByText('Already have an account ?')).not.toBeNull();
    });
  });
});
