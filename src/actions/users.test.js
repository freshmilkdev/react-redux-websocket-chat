import {addUser} from "./users";
import * as types from './ActionTypes';

describe('adding a user', () => {
    it('should create an action to add a user with id 0', () => {
        const name = 'Ursa';
        const action = {
            type: types.ADD_USER,
            name: name,
            id: 0
        };
        expect(addUser(name)).toEqual(action);
    })
});