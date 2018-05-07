import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './error';
import profileReducer from './profile';
import postReducer from './post';

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    errors: errorReducer
});

