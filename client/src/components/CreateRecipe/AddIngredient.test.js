import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddIngredient from './AddIngredient';

const mockSaveIngredient = jest.fn(); 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddIngredient saveIngredient={mockSaveIngredient}/>);

    expect(getByTestId('add-ingredient-button')).not.toBeNull();
    expect(getByTestId('ingredient-text-field')).not.toBeNull();
});
test('clicking the svg image should call submitIngredient with ingredient inputted', () => {
    const { getByTestId } = render(<AddIngredient saveIngredient={mockSaveIngredient}/>);

    fireEvent.change(getByTestId('ingredient-text-field'), {target: {value: 'chicken breast'}});

    fireEvent.click(getByTestId('add-ingredient-button'));

    expect(mockSaveIngredient).toHaveBeenCalled();    
    expect(mockSaveIngredient).toHaveBeenCalledWith('chicken breast');
});