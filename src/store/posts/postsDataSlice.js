import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsDataAction';

const initialState = {
	status: '',
	posts: [],
	error: '',
	after: '',
	isLast: false,
	page: '',
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postsRequest: (state) => {
			state.error = '';
			state.status = 'loading';
		},
		changePage: (state, action) => {
			state.page = action.payload;
			state.after = '';
			state.isLast = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(postsRequestAsync.fulfilled, (state, action) => {
				if (action.payload) {
					state.status = 'loaded';
					state.posts = action.payload.posts;
					state.error = '';
					state.after = action.payload.after;
					state.isLast = !action.payload.after;
				}
			})
			.addCase(postsRequestAsync.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.error;
			});
	},
});

export default postsSlice.reducer;
