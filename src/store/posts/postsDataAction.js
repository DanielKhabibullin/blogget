/* eslint-disable no-tabs */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsDataSlice';

export const postsRequestAsync = createAsyncThunk(
	'posts/fetch',
	(newPage, {getState, dispatch}) => {
		let page = getState().posts.page;
		if (newPage) {
			page = newPage;
			dispatch(postsSlice.actions.changePage(page));
		}
		const token = getState().token.token;
		const after = getState().posts.after;
		const loading = getState().posts.status;
		const isLast = getState().posts.isLast;
		const posts = getState().posts.posts;
		if (!token || loading === 'loading' ||
		loading === 'error' || isLast) return;
		dispatch(postsSlice.actions.postsRequest());
		return axios(
			`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			})
			.then(({data}) => {
				if (after) {
					return {after: data.data.after,
						posts: [...posts, ...data.data.children]};
				} else {
					return {after: data.data.after, posts: data.data.children};
				}
			})
			.catch((error) => ({error: error.toString()}));
	}
);
