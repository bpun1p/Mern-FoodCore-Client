import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './Home';

test('an element from each subcomponent exists', () => {
    const { getByText, getByTestId } = render(<Home />)

    expect(getByTestId('navBtn')).toBeInTheDocument();
    expect(getByText('Where Cooking Is Love Made Visible.')).toBeInTheDocument();
})