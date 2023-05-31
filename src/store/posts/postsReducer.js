import {
	POSTS_REQUEST,
	POSTS_REQUEST_ERROR,
	POSTS_REQUEST_SUCCESS
} from './postsAction';

const initialState = {
	loading: false,
	data: [],
	error: '',
};

export const postsReducer = (state = initialState, action) => {
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
