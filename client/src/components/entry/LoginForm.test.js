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
    
    expect((getByTestId('loginTitle')).textContent).toEqual('Login');
    expect(getByTestId('Username')).not.toBeNull();
    expect(getByTestId('Password')).not.toBeNull();
    expect((getByTestId('LoginBtn')).textContent).toEqual('Login');
    expect(getByText('Or log in with')).not.toBeNull();
    expect(getByTestId('facebookIcon')).not.toBeNull();
    expect(getByTestId('googleIcon')).not.toBeNull();
});
describe('when user inputs login information', () => {
    test('no inputs should output an invalid response', () => {
        const { getByTestId, getByText } = render(<LoginForm />);

        fireEvent.click(getByTestId('LoginBtn'));

        expect(getByText('Invalid username or password')).toBeInTheDocument();
    });
    test('incorrect input should output an invalid response', async () => {
        const { getByTestId, getByText } = render(<LoginForm />);

        const unauthenticatedResponse = {isAuthenticated: false, user: {username: 'fakeUser'}};
        
        AuthService.login.mockResolvedValue(unauthenticatedResponse);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});
        
        fireEvent.click(getByTestId('LoginBtn'));

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

        fireEvent.change(getByTestId('Username'), {target: {value: "Bpun1p"}});
        fireEvent.change(getByTestId('Password'), {target: {value: "Guy123su"}});

        fireEvent.click(getByTestId('LoginBtn'));

        await act(() => Promise.resolve());

        expect(queryByText('Invalid username or password')).not.toBeInTheDocument(); 
        expect(mockHistoryPush).toHaveBeenCalledWith('/profile/global');
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    });
});