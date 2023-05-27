import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
	const {token} = useContext(tokenContext);
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		try {
			const response = await fetch(`${URL_API}/best`, {
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
			// console.log(postData);
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
