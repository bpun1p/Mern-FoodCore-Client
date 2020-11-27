import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddIngredient from './AddIngredient';

const mockSubmitHandler = jest.fn(); 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddIngredient submitIngredients={mockSubmitHandler}/>);

    expect(getByTestId('add-button')).not.toBeNull();
    expect(getByTestId('ingredient-textField')).not.toBeNull();
});
test('clicking the svg image should call submitIngredientsHandler with ingredient inputted', () => {
    const { getByTestId } = render(<AddIngredient submitIngredients={mockSubmitHandler}/>);

    fireEvent.change(getByTestId('ingredient-textField'), {target: {value: 'chicken breast'}});

    fireEvent.click(getByTestId('add-button'));

    expect(mockSubmitHandler).toHaveBeenCalled();    
    expect(mockSubmitHandler).toHaveBeenCalledWith('chicken breast');
});