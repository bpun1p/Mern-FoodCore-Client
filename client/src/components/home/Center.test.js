import * as React from 'react';
import { render } from '@testing-library/react';

import Center from './Center';

test('renders the correct content', () => {
  const { getByText } = render(<Center />);
  
  const title = getByText('FoodCore');
  const heading = getByText('Where Cooking Is Love Made Visible.');
  
  expect(title).not.toBeNull();
  expect(heading).not.toBeNull();
});
 