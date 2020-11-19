import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Header';

test('renders the correct content', () => {
  const { getByTestId } = render(<Header />);

  expect(getByTestId('header-logo')).not.toBeNull();
  expect(getByTestId('navBtn')).not.toBeNull();
});

describe('Navigation', () => {
  test('when button is clicked, navigation content expands', () => {
    const { getByTestId, getByText } = render (
      <Header/>, { wrapper: BrowserRouter }
    );
  
    fireEvent.click(getByTestId('navBtn'));
    
    expect(getByText('LOGIN')).not.toBeNull();
    expect(getByText('SIGN UP')).not.toBeNull();
    expect(getByText('ABOUT ME')).not.toBeNull();    
    expect(getByTestId('exitNavBtn')).not.toBeNull();
  });