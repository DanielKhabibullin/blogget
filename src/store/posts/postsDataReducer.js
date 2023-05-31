import {
	POSTS_REQUEST,
	POSTS_REQUEST_ERROR,
	POSTS_REQUEST_SUCCESS
} from './postsDataAction';

const initialState = {
	loading: false,
	data: [],
	error: '',
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
				data: action.data,
				error: '',
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
