import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {commentsDataReducer} from './comment/commentsDataReducer';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';

const rootReducer = combineReducers({
	token: tokenReducer,
	comment: commentReducer,
	auth: authReducer,
	posts: postsReducer,
	commentsData: commentsDataReducer,
});

export const store = createStore(rootReducer,
	composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
