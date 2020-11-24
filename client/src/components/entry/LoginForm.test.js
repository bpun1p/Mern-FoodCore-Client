import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthService, {login} from '../../service/AuthService'
import LoginForm from './LoginForm';
import { act } from 'react-dom/test-utils';

jest.mock('../../service/AuthService')

// global.AuthService = {};
// global.AuthService.login = jest.fn(() => {
//     console.log('hit')
//     Promise.resolve({
//         json: () => {
//             Promise.resolve({ isAuthenticated: true, user: { username } })
//         }
//     })
// })

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
    test('user inputs wrong login information', () => {
        const { getByTestId, getByText } = render(<LoginForm />);
        const users = [{ username: 'Bpun1p'}];
        const resp = {isAuthenticated: false}
        AuthService.login.mockResolvedValue(resp)
        

        const input = getByTestId('LoginBtn');
        fireEvent.click(input);
        
        

        expect(getByText('Invalid username or password')).not.toBeNull()
    });
    test('user input correct login information', () => {
        // const { getByTestId, getByText } = render(<LoginForm />);
        // const input = getByTestId('LoginBtn');
        // fireEvent.change(getByTestId('Username'), {target: {value: "Bpun1p"}})
        // fireEvent.change(getByTestId('Password'), {target: {value: "Guy123su"}})
        // fireEvent.click(input);
    })
})