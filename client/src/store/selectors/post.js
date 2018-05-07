import axios from 'axios';
import {
    GET_ERRORS,
    ADD_POST,
    DELETE_POST,
    GET_POSTS,
    GET_POST,
    POST_LOADING
} from "../actions";
import {api} from "../../environment/dev";

export const addPost = newPost => dispatch => {
    axios
        .post(`${api}/posts/create`, newPost)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`${api}/posts`)
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_POSTS,
            payload: null
        }));
};

export const deletePost = id => dispatch => {
    axios
        .delete(`${api}/posts/${id}`)
        .then(res => dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
};