import * as actions from '../actions';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.SET_CURRENT_USER:
            return {

            };
        default:
            return state;
    }
}