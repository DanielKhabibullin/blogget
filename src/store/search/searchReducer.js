import {
	SEARCH_REQUEST,
	SEARCH_REQUEST_ERROR,
	SEARCH_REQUEST_SUCCESS,
} from './searchAction';

const initialState = {
	status: '',
	posts: [],
	error: '',
	after: '',
	isLast: false,
	page: '',
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_REQUEST:
			return {
				...state,
				status: 'loading',
				error: '',
			};
		case SEARCH_REQUEST_SUCCESS:
			return {
				...state,
				status: 'loaded',
				posts: action.posts,
				error: '',
				after: action.after,
			};
		case SEARCH_REQUEST_ERROR:
			return {
				...state,
				status: 'error',
				error: action.error,
			};
		default:
			return state;
	}
};
