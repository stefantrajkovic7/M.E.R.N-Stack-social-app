import * as actions from '../actions';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}