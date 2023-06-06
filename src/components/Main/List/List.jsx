/* eslint-disable no-tabs */
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {postsRequestAsync} from '../../../store/posts/postsDataAction';
// import {Preloader} from '../../../UI/Preloader/Preloader';
// import {Text} from '../../../UI/Text/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useSelector((state) => state.posts.posts);
	// const status = useSelector((state) => state.posts.status);
	const endList = useRef(null);
	const dispatch = useDispatch();
	const {page} = useParams();
	const [scrollCount, setScrollCount] = useState(null);
	console.log('scrollCount: ', scrollCount);

	useEffect(() => {
		dispatch(postsRequestAsync(page));
		setScrollCount(2);
	}, [page]);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (scrollCount <= 0) {
				return observer.unobserve(endList.current);
			}
			if (entries[0].isIntersecting) {
				dispatch(postsRequestAsync());
				setScrollCount((count) => count - 1);
			}
		}, {
			rootMargin: '100px',
		});
		observer.observe(endList.current);
		return () => {
			if (endList.current) {
				observer.unobserve(endList.current);
			}
		};
	}, [endList.current, scrollCount]);

	const handleLoadMore = () => {
		dispatch(postsRequestAsync());
		setScrollCount(2);
	};
	return (
		// <>
		// 	{status === 'loading' && <Preloader size={200} />}
		// 	{status === 'error' && (
		// 		<Text As='h2' className={style.title}>
		// 			Error
		// 		</Text>
		// 	)}
		// 	{status === 'loaded' && (
		<>
			<ul className={style.list}>
				{
					postsData.map(postData => (<Post key={postData.data.id}
						postData={postData.data} />))
				}
				<li ref={endList} className={style.end}/>
			</ul>
			<Outlet />
			{scrollCount <= 0 && <button className={style.btn}
				onClick={handleLoadMore}>Load More</button>}
		</>
		// 	)}
		// </>
	);
};
