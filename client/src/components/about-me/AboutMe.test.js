import * as React from 'react';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('renders content correctly', () => {
  const { getByText, getByTestId } = render(<AboutMe />, {wrapper: BrowserRouter})

  expect(getByTestId('home-page-btn')).toBeInTheDocument();
  expect(getByText('Barry Pun')).toBeInTheDocument();
  expect(getByText('Email:')).toBeInTheDocument();
  expect(getByText('bpun1p@gmail.com')).toBeInTheDocument();
  expect(getByText('Github:')).toBeInTheDocument();
  expect(getByText('https://github.com/bpun1p')).toBeInTheDocument();
  expect(getByText('LinkedIn:')).toBeInTheDocument();
  expect(getByText('https://www.linkedin.com/in/barry-pun-8b23451a3/')).toBeInTheDocument();
})

