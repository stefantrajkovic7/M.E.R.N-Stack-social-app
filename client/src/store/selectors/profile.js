import axios from 'axios';
import {PROFILE_LOADING, GET_PROFILE, CLEAR_CURRENT_PROFILE} from "../actions";
import {api} from "../../environment/dev";

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());

    axios.get(`${api}/profiles`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
};

const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};