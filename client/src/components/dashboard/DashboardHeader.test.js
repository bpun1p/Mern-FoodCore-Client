import * as React from 'react';
import { render, act } from '@testing-library/react';
import AuthService from '../../service/AuthService';
import AuthProvider from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom'

import DashboardHeader from './DashboardHeader';

jest.mock('../../service/AuthService');

test('renders the correct content', async () => {
    const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
    AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);

    const { getByTestId, getByText } = await render(<BrowserRouter><DashboardHeader /></BrowserRouter>, { wrapper: AuthProvider });

    expect(getByTestId('foodcore-logo')).not.toBeNull();
    expect(getByText('GLOBAL')).not.toBeNull();
    expect(getByText('MYPOSTS')).not.toBeNull();
    expect(getByText('CREATE')).not.toBeNull();
    expect(getByText('LOGOUT')).not.toBeNull();
});