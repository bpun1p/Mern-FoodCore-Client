import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import DashBoardHeader from './dashboard/DashBoardHeader';

test('renders the correct content', () => {
    const { getByTestId, getByText } = render(<DashBoardHeader />);


})