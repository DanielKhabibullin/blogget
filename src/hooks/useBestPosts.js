import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsDataAction';

export const useBestPosts = () => {
	const token = useSelector(state => state.token.token);
	const posts = useSelector(store => store.posts.data);
	const status = useSelector((state) => state.posts.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(postsRequestAsync());
	}, [token]);

	return [posts, status];
};
