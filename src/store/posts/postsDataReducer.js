/* eslint-disable no-tabs */
import {
	CHANGE_PAGE,
	POSTS_REQUEST,
	POSTS_REQUEST_ERROR,
	POSTS_REQUEST_SUCCESS,
	POSTS_REQUEST_SUCCESS_AFTER,
} from './postsDataAction';

const initialState = {
	status: '',
	posts: [],
	error: '',
	after: '',
	isLast: false,
	page: '',
};

export const postsDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case POSTS_REQUEST:
			return {
				...state,
				status: 'loading',
				error: '',
			};
		case POSTS_REQUEST_SUCCESS:
			return {
				...state,
				status: 'loaded',
				posts: action.posts,
				error: '',
				after: action.after,
				isLast: !action.after,
			};
		case POSTS_REQUEST_SUCCESS_AFTER:
			return {
				...state,
				status: 'loaded',
				posts: [...state.posts, ...action.posts],
				error: '',
				after: action.after,
				isLast: !action.after,
			};
		case POSTS_REQUEST_ERROR:
			return {
				...state,
				status: 'error',
				error: action.error,
			};
		case CHANGE_PAGE:
			return {
				...state,
				page: action.page,
				after: '',
				isLast: false,
			};
		default:
			return state;
	}
};
