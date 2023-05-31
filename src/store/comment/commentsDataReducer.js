import {
	COMMENTS_REQUEST,
	COMMENTS_REQUEST_ERROR,
	COMMENTS_REQUEST_SUCCESS
} from './commentsDataAction';


const initialState = {
	status: '',
	data: [],
	error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMMENTS_REQUEST:
			return {
				...state,
				status: 'loading',
				error: '',
			};
		case COMMENTS_REQUEST_SUCCESS:
			return {
				...state,
				status: 'loaded',
				data: action.data,
				error: '',
			};
		case COMMENTS_REQUEST_ERROR:
			return {
				...state,
				status: 'error',
				error: action.error,
			};

		default:
			return state;
	}
};
