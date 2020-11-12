import React from 'react';
import { render,  fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';

import Header from '../Header';
import Nav from '../Nav';

import {StaticRouter} from 'react-router-dom'

let container = null;
beforeEach(() => {
    container = document.createElement('div');
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

test('renders without crashing', () => {
    act(() => {
        render(<Header/>)
    });
}); 

describe('Navigation button' , () => {
    describe('when not clicked', () => {
        test('should not appear', () => {
            const {queryByTestId} = render(<StaticRouter><Header/></StaticRouter>);

            expect(queryByTestId('nav-closed')).toBeTruthy(); 
            expect(queryByTestId('nav-open')).toBeFalsy();
        })
    })
    describe('when clicked', () => {
        test('should be triggered', () => {
            const popUpHandler = jest.fn();
            
            const {queryByTestId} = render(<StaticRouter><Header/></StaticRouter>);

            fireEvent.click(queryByTestId('nav-closed'));
            

            // expect(popUpHandler).toHaveBeenCalled();   

 
            expect(queryByTestId('nav-closed')).toBeFalsy(); 
            expect(queryByTestId('nav-open')).toBeTruthy();

        })
        
    })
})

//should i be checking whether popuphandler has been called or should i check whether it is true
//