import messages from './messages';
import * as types from '../actions/ActionTypes';
import initialState from '../store/initialState';

describe('Messages reducer', () => {
    it('should return the initial state, an empty array', () => {
        expect(messages(initialState.messages, {})).toEqual([])
    });

    it('should handle ADD_MESSAGE and store every message', () => {
        expect(
            messages(initialState.messages, {
                type: types.ADD_MESSAGE,
                text: 'Yo',
                author: 'Me'
            })
        ).toEqual([
            {
                text: 'Yo',
                author: 'Me'
            }
        ])
    });

    expect(
        messages(
            [
                {
                    text: 'Hey',
                    author: 'Me'
                }
            ],
            {
                type: types.ADD_MESSAGE,
                text: 'Hey again',
                author: 'Me again'
            }
        )
    ).toEqual([
        {
            text: 'Hey',
            author: 'Me'
        },
        {
            text: 'Hey again',
            author: 'Me again'
        }
    ]);
});