import { createAction } from 'redux-actions';

export const GET_PROFILE = createAction('[Profile] Fetching user profile');
export const GET_PROFILES = createAction('[Profile] Fetching users profiles');
export const PROFILE_LOADING = createAction('[Profile] Loading user profile ');
export const PROFILE_NOT_FOUND = createAction('[Profile] Fetching user profile failed');
export const CLEAR_CURRENT_PROFILE = createAction('[Profile] Clearing current profile');