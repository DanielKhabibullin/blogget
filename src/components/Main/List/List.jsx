import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useContext(postsContext).posts;
	return (
		<ul className={style.list}>
			{
				postsData.map((postData, index) => (<Post key={index}
					postData={postData} />))
			}
		</ul>
	);
};
