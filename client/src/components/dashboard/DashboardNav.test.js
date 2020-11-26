import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import AuthService from '../../service/AuthService';
import AuthProvider from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom'

import DashboardNav from '../dashboard/DashboardNav';

jest.mock('../../service/AuthService');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
      push: mockHistoryPush,
  }),
}));

const mockHistoryPush = jest.fn();

test('renders the correct content', async () => {
    const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
    AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);

    const { getByText } = render(<BrowserRouter><DashboardNav /></BrowserRouter>, { wrapper: AuthProvider });
    await act(() => Promise.resolve())

    expect(getByText('GLOBAL')).not.toBeNull();
    expect(getByText('MYPOSTS')).not.toBeNull();
    expect(getByText('CREATE')).not.toBeNull();
    expect(getByText('LOGOUT')).not.toBeNull();
});
test('user should be redirected to the login page when logout button is clicked', async () => {
    const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
    AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);
    const logoutResponse = { user: { username: '' }, success: true }
    AuthService.logout.mockResolvedValue(logoutResponse)

    const { getByText } = render(<BrowserRouter><DashboardNav /></BrowserRouter>, { wrapper: AuthProvider });

    await act(() => Promise.resolve())

    fireEvent.click(getByText('LOGOUT'));

    await act(() => Promise.resolve())

    expect(mockHistoryPush).toHaveBeenCalledWith('/login');
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
});


