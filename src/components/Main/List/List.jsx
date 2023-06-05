/* eslint-disable no-tabs */
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsDataAction';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Text} from '../../../UI/Text/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useSelector((state) => state.posts.posts);
	console.log('postsData: ', postsData);
	const status = useSelector((state) => state.posts.status);
	const endList = useRef(null);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(postsRequestAsync());
	// }, []);
	useEffect(() => {
		// if (!postsData.length) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(postsRequestAsync());
				console.log('see see');
			}
		}, {
			rootMargin: '100px',
		});
		observer.observe(endList.current);
	}, [endList.current]);

	return (
		<>
			{status === 'loading' && <Preloader size={200} />}
			{status === 'error' && (
				<Text As='h2' className={style.title}>
					Error
				</Text>
			)}
			{status === 'loaded' && (
				<ul className={style.list}>
					{
						postsData.map(postData => (<Post key={postData.id}
							postData={postData.data} />))
					}
					<li ref={endList} className={style.end}/>
				</ul>
			)}
		</>
	);
};
