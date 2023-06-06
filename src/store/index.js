import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import postsReducer from './posts/postsDataSlice';
import commentsDataReducer from './comment/commentsDataSlice';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		token: tokenReducer,
		comment: commentReducer,
		auth: authReducer,
		posts: postsReducer,
		commentsData: commentsDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tokenMiddleware),
});
