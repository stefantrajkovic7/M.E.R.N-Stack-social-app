import axios from 'axios';
import {PROFILE_LOADING, GET_PROFILE, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER} from "../actions";
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

export const createProfile = (profileData, history) => dispatch => {
    axios
        .post(`${api}/profiles/create`, profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const deleteAccount = () => dispatch => {
    if (window.confirm('Are you sure? This cannot be undone!')) {
        axios
            .delete(`${api}/profiles`)
            .then(res => dispatch({
                type: SET_CURRENT_USER,
                payload: {}
            }))
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
    }
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