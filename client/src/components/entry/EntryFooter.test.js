import * as React from 'react';
import { render } from '@testing-library/react';

import EntryFooter from './EntryFooter';

test('renders the correct content', () => {
  const { getByText } = render(<EntryFooter />);

  expect(getByText
    ('*By signing up, you agree to our Terms of Use and that you read our Privary Policy')
    ).not.toBeNull();
})