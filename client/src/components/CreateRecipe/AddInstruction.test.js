import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddInstruction from './AddInstruction';

const mockSubmitHandler = jest.fn(); 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddInstruction submitInstructions={mockSubmitHandler}/>);

    expect(getByTestId('add-instruction-button')).not.toBeNull();
    expect(getByTestId('instruction-textField')).not.toBeNull();
});
test('clicking the svg image should call submitIngredientsHandler with ingredient inputted', () => {
    const { getByTestId } = render(<AddInstruction submitInstructions={mockSubmitHandler}/>);

    fireEvent.change(getByTestId('instruction-textField'), {target: {value: 'Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes'}});

    fireEvent.click(getByTestId('add-instruction-button'));

    expect(mockSubmitHandler).toHaveBeenCalled();    
    expect(mockSubmitHandler).toHaveBeenCalledWith('Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes');
});