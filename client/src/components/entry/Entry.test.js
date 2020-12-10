import * as React from 'react';
import { render } from '@testing-library/react';
import Entry from './Entry';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('an element from each subcomponent exists', () => {
  const { getByTestId, getByText, getAllByTestId } = render(<Entry />, {wrapper: BrowserRouter})

  expect((getByTestId('login-title')).textContent).toEqual('Login');
  expect(getByTestId('sign-up-title').textContent).toEqual('Sign Up');
  expect(getByText('Already have an account ?')).not.toBeNull();
  expect(getByText
    ('*By signing up, you agree to our Terms of Use and that you read our Privary Policy')
    ).not.toBeNull();
  expect(getAllByTestId('facebook-icon')).not.toBeNull();
})