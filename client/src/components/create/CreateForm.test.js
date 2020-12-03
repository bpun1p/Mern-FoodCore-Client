import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthService from '../../service/AuthService';
import AuthProvider from '../../context/AuthContext';
import CreateForm from './CreateForm';

jest.mock('../../service/AuthService');


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }));

test('renders content correctly', async () => {
    const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
    AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);

    const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});

    await act(() => Promise.resolve());
    
    expect(getByTestId('image-input')).not.toBeNull();
    expect(getByText("Receipe's Name:")).toBeInTheDocument();
    expect(getByTestId('receipe-name-text-field')).not.toBeNull();
    expect(getByText("Description:")).toBeInTheDocument();
    expect(getByTestId('description-text-field')).not.toBeNull();
    expect(getByText("INGREDIENTS")).toBeInTheDocument();
    expect(getByTestId('ingredient-textField')).not.toBeNull();
    expect(getByTestId('add-ingredient-button')).not.toBeNull();
    expect(getByText("INSTRUCTIONS")).toBeInTheDocument();
    expect(getByTestId('instruction-textField')).not.toBeNull();
    expect(getByTestId('add-instruction-button')).not.toBeNull();
    expect(getByText('Create')).toHaveAttribute('type', 'submit');
})

describe('add ingredients form', () => {

    beforeEach(() => {
        const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
        AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);
    });

    test('empty input will display and invalid text', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});
    
        await act(() => Promise.resolve());
        fireEvent.click(getByTestId('add-ingredient-button'))

        expect(getByText('input valid entry')).toBeInTheDocument();
    });
    test('inputting text and submitting should display on DOM', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());

        fireEvent.change(getByTestId('ingredient-textField'), {target: {value: 'chicken breast'}});
        fireEvent.click(getByTestId('add-ingredient-button'))

        expect(getByText('chicken breast')).toBeInTheDocument();
    });
});

describe('add instructions form', () => {

    beforeEach(() => {
        const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
        AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);
    });

    test('empty input will display an error message ', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});
    
        await act(() => Promise.resolve());
        fireEvent.click(getByTestId('add-instruction-button'))

        expect(getByText('input valid entry')).toBeInTheDocument();
    });
    test('inputting text and submitting should display on dom', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());

        fireEvent.change(getByTestId('instruction-textField'), {target: {value: 'Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes'}});
        fireEvent.click(getByTestId('add-instruction-button'))

        expect(getByText('Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes')).toBeInTheDocument();
    });
});

describe('image uploader', () => {

    beforeEach(() => {
        const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
        AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);
    });

    test('uploading a non image file should return error message', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());
        
        const file = new File(['foo'], 'foo.txt', {type: 'text/plain'})

        const imageInput = getByTestId('image-input');
        fireEvent.change(imageInput, {target: {files: [file]}});

        await act(() => Promise.resolve());

        expect(getByText('unable to convert image file')).toBeInTheDocument();
    })
    test('uploading a image file should display an image onto the Dom', async () => {
        const { getByTestId, getByText } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());
        
        const file = new File(['foo'], 'foo.txt', {type: 'text/plain'})

        const imageInput = getByTestId('image-input');
        fireEvent.change(imageInput, {target: {files: [file]}});

        await act(() => Promise.resolve());

        expect(getByText('unable to convert image file')).toBeInTheDocument();
    })
})

describe('Create receipe button', () => {

    beforeEach(() => {
        const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
        AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);
    });

    test('clicking with no inputs will display a error message in the DOM', async () => {
        const { getByText } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());

        fireEvent.click(getByText('Create'));

        expect(getByText('Please fill in all feilds')).toBeInTheDocument();
    });
    test('clicking with not fully filled inputs will display an error message in the DOM', async () => {
        const { getByText, getByTestId } = render(<CreateForm />, {wrapper: AuthProvider});

        await act(() => Promise.resolve());

        fireEvent.change(getByTestId('receipe-name-text-field'), {target: {value: 'Chicken Pot Pie'}});
        fireEvent.change(getByTestId('description-text-field'), {target: {value: 'A delicious chicken pie made from scratch with carrots, peas and celery.'}});
        fireEvent.change(getByTestId('ingredient-textField'), {target: {value: 'chicken breast'}});

        fireEvent.click(getByTestId('add-ingredient-button'));

        fireEvent.click(getByText('Create'));

        expect(getByText('Please fill in all feilds')).toBeInTheDocument();
    });

});