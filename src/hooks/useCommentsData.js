import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comment/commentsDataAction';

export const useCommentsData = id => {
	const commentsData = useSelector((state) => state.commentsData.comments);
	const post = useSelector((state) => state.commentsData.post);
	const status = useSelector(state => state.commentsData.status);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(commentsRequestAsync(id));
	}, []);

	return [commentsData, post, status];
};
