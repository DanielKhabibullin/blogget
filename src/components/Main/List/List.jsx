import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postData = {
		thumbnail: '',
		title: 'Title',
		author: 'Author',
		ups: 24,
		date: '2023-02-24T09:45:00.000Z',
	};

	return (
		<ul className={style.list}>
			<Post postData={postData} />
		</ul>
	);
};

