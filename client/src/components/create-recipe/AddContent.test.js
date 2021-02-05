import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddContent from './AddContent';

const mockContentType = 'ingredient';
const mockSaveContent = jest.fn() 

test('renders content correctly', () => {
    const { getByTestId } = render(<AddContent saveContent={mockSaveContent} contentType={mockContentType} />);

    expect(getByTestId('add-content-button')).not.toBeNull();
    expect(getByTestId('content-text-field')).not.toBeNull();
});
test('clicking the add-content-button with input field filled should call submitContent()', () => {
    const { getByTestId } = render(<AddContent saveContent={mockSaveContent} contentType={mockContentType}/>);

    fireEvent.change(getByTestId('content-text-field'), {target: {value: 'chicken breast'}});

    fireEvent.click(getByTestId('add-content-button'));

    expect(mockSaveContent).toHaveBeenCalled();    
    expect(mockSaveContent).toHaveBeenCalledWith('chicken breast');
});