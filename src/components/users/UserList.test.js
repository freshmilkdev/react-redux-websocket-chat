import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import UserList from './UserList'

const setup = () => {
    const props = {
        users: []
    };
    Enzyme.configure({ adapter: new Adapter() });
    const enzymeWrapper = mount(<UserList {...props} />);

    return {
        props,
        enzymeWrapper
    }
};

describe('UserList', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('aside').length).toBe(1);
    });
});