/* eslint-disable no-tabs */
import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
	type: POSTS_REQUEST,
});

export const postsRequestSuccess = data => ({
	type: POSTS_REQUEST_SUCCESS,
	posts: data.children,
	after: data.after,
});

export const postsRequestSuccessAfter = (data) => ({
	type: POSTS_REQUEST_SUCCESS_AFTER,
	posts: data.children,
	after: data.after,
});

export const postsRequestError = error => ({
	type: POSTS_REQUEST_ERROR,
	error,
});

export const postsRequestAsync = () => async (dispatch, getState) => {
	const token = getState().token.token;
	const after = getState().posts.after;
	const loading = getState().posts.status;
	console.log(loading);
	const isLast = getState().posts.isLast;
	if (!token || loading === 'loading' || isLast) return;
	dispatch(postsRequest());

	axios(`${URL_API}/best?limit=10&${after ? `after=${after}` : ''}`, {
		headers: {
			Authorization: `bearer ${token}`,
		},
	})
		.then(({data}) => {
			if (after) {
				dispatch(postsRequestSuccessAfter(data.data));
			} else {
				dispatch(postsRequestSuccess(data.data));
			}
		})
		.catch((err) => {
			console.error(err);
			dispatch(postsRequestError(err.toString()));
		});
};
