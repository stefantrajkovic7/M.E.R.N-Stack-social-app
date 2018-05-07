import * as actions from '../actions';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ERRORS:
            return action.payload;
        case actions.CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}