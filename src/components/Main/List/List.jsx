import {useSelector} from 'react-redux';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Text} from '../../../UI/Text/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useSelector((state) => state.posts.posts);
	const status = useSelector((state) => state.posts.status);
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
						postsData.map(({data}) => (<Post key={data.id}
							postData={data} />))
					}
				</ul>
			)}
		</>
	);
};
