import *  as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm from './SignUpForm';
import AuthService from '../../service/AuthService';

jest.mock('../../service/AuthService');

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
}));

test('renders the correct content', () => {
    const { getByTestId, getByText } = render(<SignUpForm />);

    expect(getByTestId('signupTitle').textContent).toEqual('Sign Up');
    expect(getByTestId('Username')).not.toBeNull();
    expect(getByTestId('Password')).not.toBeNull();
    expect(getByTestId('UsernameConfirm')).not.toBeNull();
    expect(getByTestId('PasswordConfirm')).not.toBeNull();
    expect(getByTestId('SignupBtn')).not.toBeNull();
    expect(getByText('Or sign up with')).not.toBeNull();
    expect(getByTestId('facebookIcon')).not.toBeNull();
    expect(getByTestId('googleIcon')).not.toBeNull();
});
describe('when user inputs information into sign up form', () => {
    test('no inputs should output an invalid response', () => {
        const { getByTestId, getByText } = render(<SignUpForm />);

        fireEvent.click(getByTestId('SignupBtn'));

        expect(getByText('please fill in all feilds')).toBeInTheDocument();
    });
    test('inputs some fields should output an invalid response', () => {
        const { getByTestId, getByText } = render(<SignUpForm />);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});

        fireEvent.click(getByTestId('SignupBtn'));

        expect(getByText('please fill in all feilds')).toBeInTheDocument();
    });
    test('inputs dont match should output invalid response', () => {
        const { getByTestId, getByText } = render(<SignUpForm />);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('UsernameConfirm'), {target: {value: 'falseMatch'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});
        fireEvent.change(getByTestId('PasswordConfirm'), {target: {value: 'falseMatch'}});

        fireEvent.click(getByTestId('SignupBtn'));

        expect(getByText('username or password do not match')).toBeInTheDocument();
    });
    test('correct inputs should call push to login page', async () => {
        const { getByTestId, getByText } = render(<SignUpForm />);

        const successResponse =  { message: { msgBody: 'account successfully created', msgError: false } };
        AuthService.register.mockResolvedValue(successResponse);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('UsernameConfirm'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});
        fireEvent.change(getByTestId('PasswordConfirm'), {target: {value: 'fakePassword'}});

        fireEvent.click(getByTestId('SignupBtn'));

        await act(() => Promise.resolve());
        expect(mockHistoryPush).toHaveBeenCalledWith('/login');
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    });
    test('inputs that already exist in the database should output error message', async () => {
        const { getByTestId, getByText } = render(<SignUpForm />);

        const errorResponse =  { message: { msgBody: 'username is already used', msgError: true } };
        AuthService.register.mockResolvedValue(errorResponse);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('UsernameConfirm'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});
        fireEvent.change(getByTestId('PasswordConfirm'), {target: {value: 'fakePassword'}});

        fireEvent.click(getByTestId('SignupBtn'));

        await act(() => Promise.resolve());

        expect(getByText('username is already used')).toBeInTheDocument();
    });
    test('inputs made in /login path should refresh page', async () => {
        delete window.location;
        window.location = new URL("http://localhost:3000/login");
        window.location.reload = jest.fn();

        const { getByTestId} = render(<SignUpForm />);

        const successResponse =  { message: { msgBody: 'account successfully created', msgError: false } };

        AuthService.register.mockResolvedValue(successResponse);

        fireEvent.change(getByTestId('Username'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('UsernameConfirm'), {target: {value: 'fakeUsername'}});
        fireEvent.change(getByTestId('Password'), {target: {value: 'fakePassword'}});
        fireEvent.change(getByTestId('PasswordConfirm'), {target: {value: 'fakePassword'}});

        fireEvent.click(getByTestId('SignupBtn'));

        await act(() => Promise.resolve());

        expect(window.location.reload).toHaveBeenCalled();
    });
});