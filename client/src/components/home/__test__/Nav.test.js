import React from 'react';
import ReactDom from 'react-dom';

import Nav from '../Nav';

import {StaticRouter} from 'react-router-dom'

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<StaticRouter><Nav></Nav></StaticRouter>, div);
});

