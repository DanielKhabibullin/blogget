import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
	const {token} = useContext(tokenContext);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/best`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then(response => response.json())
			.then((data) => {
				const postData = data.data.children.map(({data: {
					title, thumbnail, author, ups, created}}) => ({
					title,
					thumbnail: /^https:\/\//.test(thumbnail) ?
						thumbnail.replace(/\?.*$/, '') : '',
					author,
					ups,
					date: created,
				}));
				console.log(data.data.children);
				setPosts(postData);
			})
			.catch(err => console.error(err));
	}, []);

	return [posts];
};
