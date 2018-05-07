import * as actions from '../actions';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case actions.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case actions.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case actions.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default:
            return state;
    }
}