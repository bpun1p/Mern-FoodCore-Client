import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SocialSignUp from './SocialSignUp';

describe('renders the correct content', () => {
  test('correctly renders the facebook icon', () => {
    const { getByTestId } = render(<SocialSignUp />);
    
    const facebookIcon = getByTestId('facebook-icon');
    expect(facebookIcon).not.toBeNull();
    expect(facebookIcon).toHaveAttribute('src', 'facebook.png');
  });
  test('to render the google icon', () => {
    const { getByTestId } = render(<SocialSignUp />);
      
    const googleIcon = getByTestId('google-icon');
    expect(googleIcon).not.toBeNull();
    expect(googleIcon).toHaveAttribute('src', 'google.png');
  });
});


  