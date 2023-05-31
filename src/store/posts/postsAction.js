import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
	type: POSTS_REQUEST,
});

export const postsRequestSuccess = data => ({
	type: POSTS_REQUEST_SUCCESS,
	data,
});

export const postsRequestError = error => ({
	type: POSTS_REQUEST_ERROR,
	error
});

export const postsRequestAsync = () => async (dispatch, getState) => {
	const token = getState().token.token;
	if (!token) return;
	dispatch(postsRequest());
	axios(`${URL_API}/best?limit=20`, {
		headers: {
			Authorization: `bearer ${token}`,
		},
	})
		.then(({data: {data: {children}}}) => {
			dispatch(postsRequestSuccess(children));
		})
		.catch((err) => {
			console.error(err);
			dispatch(postsRequestError(err.toString()));
		});
};

// const data = await response.json();
// const postData = data.data.children.map(({
// data: {id, title, thumbnail, author, ups, selftext, created}}) =>
// ({
// id,
// title,
// thumbnail: /^https:\/\//.test(thumbnail) ?
// thumbnail.replace(/\?.*$/, '') : '',
// author,
// ups,
// selftext,
// date: created
// }));
// setPosts(postData);
