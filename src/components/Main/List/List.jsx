/* eslint-disable no-tabs */
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {postsRequestAsync} from '../../../store/posts/postsDataAction';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Text} from '../../../UI/Text/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useSelector((state) => state.posts.posts);
	const status = useSelector((state) => state.posts.status);
	const after = useSelector((state) => state.posts.after);
	const isLast = useSelector((state) => state.posts.isLast);
	const endList = useRef(null);
	const dispatch = useDispatch();
	const {page} = useParams();
	const [loadMoreBtn, setLoadMoreBtn] = useState(false);
	let scrollingDownloadCountdown = 2;

	useEffect(() => {
		dispatch(postsRequestAsync(page));
		setLoadMoreBtn(false);
		scrollingDownloadCountdown = 2;
	}, [page]);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(postsRequestAsync());
				scrollingDownloadCountdown -= 1;
			}
			if (scrollingDownloadCountdown <= 0) {
				setLoadMoreBtn(true);
				return observer.unobserve(endList.current);
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
	}, [endList.current, loadMoreBtn]);

	return (
		<>
			<ul className={style.list}>
				{}
				{after === '' & status !== '' ? (
					<Preloader size={200} />
				) : status === 'error' || status === '' ? (
					<div className={style.btnWrapper}>
						<Text As='h2' className={style.title}>
							Error
						</Text>
					</div>
				) : (
					postsData.map(postData => <Post key={postData.data.id}
						postData={postData.data} />)
				)}
				<li ref={endList} className={style.end}>
					{(after !== '') & (status === 'loading') ? (
						<Preloader size={200} />
					) : loadMoreBtn & !isLast & (status !== 'error') ? (
						<div className={style.btnWrapper}>
							<button
								className={style.btn}
								onClick={() => dispatch(postsRequestAsync())}
							>
								Load more
							</button>
						</div>
					) : (
						''
					)}
				</li>
			</ul>
			<Outlet />
		</>
		// <>
		// 	{status === 'loading' && <Preloader size={200} />}
		// 	{status === 'error' && (
		// 		<Text As='h2' className={style.title}>
		// 			Error
		// 		</Text>
		// 	)}
		// 	{status === 'loaded' && (
		// <>
		// 	<ul className={style.list}>
		// 		{
		// 			postsData.map(postData => (<Post key={postData.data.id}
		// 				postData={postData.data} />))
		// 		}
		// 		<li ref={endList} className={style.end}/>
		// 	</ul>
		// 	<Outlet />
		// 	{scrollCount <= 0 && <button className={style.btn}
		// 		onClick={handleLoadMore}>Load More</button>}
		// </>
		// 	)}
		// </>
	);
};
