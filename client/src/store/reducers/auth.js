import * as actions from '../actions';
import isEmpty from "../../helpers/isEmpty";

const initialState = {
    isAutheticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}