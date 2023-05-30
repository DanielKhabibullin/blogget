import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const useBestPosts = () => {
	const token = useSelector(state => state.token.token);
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		try {
			const response = await fetch(`${URL_API}/best?limit=20`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			});
			const data = await response.json();
			const postData = data.data.children.map(({
				data: {id, title, thumbnail, author, ups, selftext, created}}) =>
				({
					id,
					title,
					thumbnail: /^https:\/\//.test(thumbnail) ?
						thumbnail.replace(/\?.*$/, '') : '',
					author,
					ups,
					selftext,
					date: created
				}));
			setPosts(postData);
		} catch (err) {
			console.warn(err);
		}
	};

	useEffect(() => {
		if (!token) return;

		fetchPosts();
	}, [token]);

	return [posts];
};
