import {addMessage} from "./messages";
import * as types from './ActionTypes';

describe('adding a message', () => {

    it('should create an action to add a message with id 0', () => {

        const text = 'Something';
        const author = 'Me';

        const action = {
            type: types.ADD_MESSAGE,
            text: text,
            author: author,
            id: 0
        };

        expect(addMessage(text, author)).toEqual(action);
    });

});