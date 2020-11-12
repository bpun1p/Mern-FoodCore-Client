import React from 'react';
import ReactDom from 'react-dom';

import Main from '../Main';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Main></Main>, div);
});


