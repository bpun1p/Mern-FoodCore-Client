import * as React from 'react';
import { render } from '@testing-library/react';
import Entry from './Entry';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('renders the correct content', () => {
  const { getByTestId, getByText, getAllByTestId } = render(<Entry />, {wrapper: BrowserRouter})

  expect((getByTestId('loginTitle')).textContent).toEqual('Login');
  expect(getByTestId('signupTitle').textContent).toEqual('Sign Up');
  expect(getByText('Already have an account ?')).not.toBeNull();
  expect(getByText
    ('*By signing up, you agree to our Terms of Use and that you read our Privary Policy')
    ).not.toBeNull();
  expect(getAllByTestId('facebookIcon')).not.toBeNull();
})