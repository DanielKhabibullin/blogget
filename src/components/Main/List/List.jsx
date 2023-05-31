import {useBestPosts} from '../../../hooks/useBestPosts';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Text} from '../../../UI/Text/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const [posts, status] = useBestPosts();
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
						posts.map(postData => (<Post key={postData.id}
							postData={postData.data} />))
					}
				</ul>
			)}
		</>
	);
};
