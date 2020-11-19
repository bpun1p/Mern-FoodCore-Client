import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Header';

test('renders the correct content', () => {
  const { getByTestId } = render(<Header />);

  expect(getByTestId('header-logo')).not.toBeNull();
  expect(getByTestId('navBtn')).not.toBeNull();
});
