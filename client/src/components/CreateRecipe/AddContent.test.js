import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddContent from './AddContent';

const mockContentType = 'ingredient';
const mocksaveContent = jest.fn() 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddContent saveContent={mocksaveContent} contentType={mockContentType} />);

    expect(getByTestId('add-content-button')).not.toBeNull();
    expect(getByTestId('content-text-field')).not.toBeNull();
});
test('clicking the add-content-button with input field filled should call submitContent()', () => {
    const { getByTestId } = render(<AddContent saveContent={mocksaveContent} contentType={mockContentType}/>);

    fireEvent.change(getByTestId('content-text-field'), {target: {value: 'chicken breast'}});

    fireEvent.click(getByTestId('add-content-button'));

    expect(mockSaveIngredient).toHaveBeenCalled();    
    expect(mockSaveIngredient).toHaveBeenCalledWith('chicken breast');
});
