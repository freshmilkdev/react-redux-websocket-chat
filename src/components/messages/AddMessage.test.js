import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddMessage from './AddMessage';

const setup = () => {
    const props = {
        text: 'Hi',
        userName: 'Me',
        changeMessage: jest.fn(),
        addMessage: jest.fn()
    };
    Enzyme.configure({ adapter: new Adapter() });
    const enzymeWrapper = mount(<AddMessage {...props} />);

    return {
        props,
        enzymeWrapper
    }
};

describe('AddMessage', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('input#new-message').length).toBe(1);
    });

    it('input value should be settable programmatically', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('input#new-message').props().value).toBe('Hi');
    });
});