// import React from 'react';
// import { mount, configure } from 'enzyme';
// configure({adapter: new Adapter()});

// import Adapter from 'enzyme-adapter-react-16';

// import Header from '../Header';
// import Nav from '../Nav';

// import {StaticRouter} from 'react-router-dom';

// let wrapper;

// beforeEach(() => {
//     wrapper = mount(<StaticRouter><Header/></StaticRouter>);
// });

// test('renders without crashing', () => {
//     expect(wrapper).not.toBeNull();
// }); 

// describe('Navigation button' , () => {
//     test('when not clicked navigation is disabled', () => {
//         expect(wrapper.find(Nav)).toHaveLength(0);
//         expect(wrapper.find('.header__navClosed')).toHaveLength(1);
//     });
//     test('when clicked navigation is enabled', () => {     
//         wrapper.find('.header__navClosed').simulate('click');

//         expect(wrapper.find(Nav)).toHaveLength(1);
//         expect(wrapper.find('.header__navClosed')).toHaveLength(0);
//     });
// });

// import React from 'react';
// import { mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});
// import Home from '../../Home';

// let wrapper;

// test('renders without crashing', () => {
//     wrapper = mount(<Home/>)
//     expect(wrapper).not.toBeNull();
// });

// import React from 'react';
// import { mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});
// import Main from '../Main';

// let wrapper;

// test('renders without crashing', () => {
//     wrapper = mount(<Main/>)
//     expect(wrapper).not.toBeNull();
// });

// import React from 'react';
// import { shallow, mount, configure } from 'enzyme';
// import {MemoryRouter} from 'react-router-dom'
// import Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});
// import Nav from '../Nav';
// import {Link} from 'react-router-dom';

// let wrapper;
// let props = {popUpHandler: jest.fn()}

// test('renders without crashing', () => {
//     expect(wrapper).not.toBeNull();
// });

// describe('Navigation Content', () => {
//     beforeEach(() => {
//         wrapper = mount(<MemoryRouter><Nav/></MemoryRouter>)
//     })
//     describe('login', () => {
//         test('link contains /login property ', () => {
//             expect(wrapper.find(Link).at(0).prop('to')).toEqual('/login'); 
//         })
//         test('button is rendering', () => {
//             expect(wrapper.find('.header__login')).toHaveLength(1);
//         })
//     })
//     describe('login', () => {
//         test('link contains /register property ', () => {
//             expect(wrapper.find(Link).at(1).prop('to')).toEqual('/register'); 
//         })
//         test('button is rendering', () => {
//             expect(wrapper.find('.header__register')).toHaveLength(1);
//         })
//     })
//     describe('login', () => {
//         test('link contains /about-me property ', () => {
//             expect(wrapper.find(Link).at(2).prop('to')).toEqual('/about-me'); 
//         })
//         test('button is rendering', () => {
//             expect(wrapper.find('.header__aboutme')).toHaveLength(1);
//         })
//     })
// })

// describe('close navigation button', () => {
//     beforeEach(() => {
//         wrapper = mount(<MemoryRouter><Nav {...props}/></MemoryRouter>)
//     })
//     test('renders correctly', () => {
//         expect(wrapper.find('.close__nav').exists()).toBeTruthy();
//     })
//     test('popUpHandler will not be called by default', () => {
//         expect(props.popUpHandler).not.toBeCalled();
//     })
//     test('on click popUpHandler will be called', () => {
//         wrapper.find('.close__nav').simulate('click');

//         expect(props.popUpHandler).toBeCalled();
//     })
// })