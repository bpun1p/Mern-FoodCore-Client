import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthService from '../../service/AuthService';
import AuthProvider from '../../context/AuthContext';
import LoginForm from './LoginForm';

jest.mock('../../service/AuthService');

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
  
test('renders the correct content', () => {
    const { getByTestId, getByText } = render(<LoginForm />);
    
    expect((getByTestId('login-title')).textContent).toEqual('Login');
    expect(getByTestId('username')).not.toBeNull();
    expect(getByTestId('password')).not.toBeNull();
    expect((getByTestId('login-btn')).textContent).toEqual('Login');
    expect(getByText('Or log in with')).not.toBeNull();
    expect(getByTestId('facebook-icon')).not.toBeNull();
    expect(getByTestId('google-icon')).not.toBeNull();
});
describe('when user inputs login information', () => {
    test('no inputs should output an invalid response', () => {
        const { getByTestId, getByText } = render(<LoginForm />);

        fireEvent.click(getByTestId('login-btn'));

        expect(getByText('Invalid username or password')).toBeInTheDocument();
    });
    test('incorrect input should output an invalid response', async () => {
        const { getByTestId, getByText } = render(<LoginForm />);

        const unauthenticatedResponse = {isAuthenticated: false, user: {username: 'fakeUser'}};
        
        AuthService.login.mockResolvedValue(unauthenticatedResponse);

        fireEvent.change(getByTestId('username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('password'), {target: {value: 'fakePassword'}});
        
        fireEvent.click(getByTestId('login-btn'));

        await act(() => Promise.resolve());
        
        expect(getByText('Invalid username or password')).toBeInTheDocument();  
    });
    test('correct input should push user to their profile page', async() => {
        const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
        const defaultResponse = { isAuthenticated: false, user: { username: '' }};

        AuthService.isAuthenticated.mockResolvedValue(defaultResponse);
        
        const { getByTestId, queryByText } = render(<LoginForm />, { wrapper: AuthProvider });

        await act(() => Promise.resolve());

        AuthService.login.mockResolvedValue(authenticatedResponse);

        fireEvent.change(getByTestId('username'), {target: {value: "Bpun1p"}});
        fireEvent.change(getByTestId('password'), {target: {value: "Guy123su"}});

        fireEvent.click(getByTestId('login-btn'));

        await act(() => Promise.resolve());

        expect(queryByText('Invalid username or password')).not.toBeInTheDocument(); 
        expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard/global');
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    });
});