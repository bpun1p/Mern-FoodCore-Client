import * as React from 'react';
import { render, act } from '@testing-library/react';
import AuthService from '../../service/AuthService';
import AuthProvider from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Create from './Create';

jest.mock('../service/AuthService');

test('an element from each subcomponent exists', async () => {
    const authenticatedResponse = {isAuthenticated: true, user: {username: 'Bpun1p'}};
    AuthService.isAuthenticated.mockResolvedValue(authenticatedResponse);

    const { getByTestId, getByText } = render(<BrowserRouter><Create /></BrowserRouter>, { wrapper: AuthProvider });

    await act(() => Promise.resolve())

    expect(getByTestId('FoodCore-Logo')).toBeInTheDocument();
    expect(getByText("Receipe's Name:")).toBeInTheDocument();
    expect(getByTestId('add-ingredient-button')).toBeInTheDocument();
    expect(getByTestId('add-instruction-button')).toBeInTheDocument();
})