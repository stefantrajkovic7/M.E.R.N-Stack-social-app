import axios from 'axios';
import {GET_ERRORS, ADD_POST, DELETE_POST, GET_POSTS, GET_POST, POST_LOADING} from "../actions";
import {api} from "../../environment/dev";

export const addPost = postData => dispatch => {
    axios
        .post(`${api}/posts/create`, postData)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};