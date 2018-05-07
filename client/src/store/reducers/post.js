import * as actions from '../actions';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        default:
            return state;
    }
}