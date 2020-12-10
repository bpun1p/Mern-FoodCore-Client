import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddInstruction from './AddInstruction';

const mockSaveInstruction = jest.fn(); 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddInstruction saveInstruction={mockSaveInstruction}/>);

    expect(getByTestId('add-instruction-button')).not.toBeNull();
    expect(getByTestId('instruction-text-field')).not.toBeNull();
});
test('clicking the svg image should call submitIngredient with ingredient inputted', () => {
    const { getByTestId } = render(<AddInstruction saveInstruction={mockSaveInstruction}/>);

    fireEvent.change(getByTestId('instruction-text-field'), {target: {value: 'Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes'}});

    fireEvent.click(getByTestId('add-instruction-button'));

    expect(mockSaveInstruction).toHaveBeenCalled();    
    expect(mockSaveInstruction).toHaveBeenCalledWith('Bake a 4-oz. chicken breast at 350°F (177˚C) for 25 to 30 minutes');
});