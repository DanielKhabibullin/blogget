import {
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
		default:
			return state;
	}
};
