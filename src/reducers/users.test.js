import users from './users';
import * as types from '../actions/ActionTypes';
import initialState from '../store/initialState';


describe('Users reducer', () => {
    it('should return the initial state, an empty array', () => {
        expect(users(initialState.users, {})).toEqual([])
    });

    it('should handle ADD_USER and store every user', () => {
        expect(
            users(initialState.users, {
                type: types.ADD_USER,
                name: 'Tony'
            })
        ).toEqual([
            {
                name: 'Tony'
            }
        ]);

        expect(
            users(
                [
                    {
                        name: 'Mark',
                    }
                ],
                {
                    type: types.ADD_USER,
                    name: 'Tony'
                }
            )
        ).toEqual([
            {
                name: 'Mark',
            },
            {
                name: 'Tony'
            }
        ])
    })
});