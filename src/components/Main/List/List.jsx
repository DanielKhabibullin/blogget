import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = [
		{
			thumbnail: '',
			title: 'Title1',
			author: 'Author1',
			ups: 77,
			date: '2023-02-24T09:45:00.000Z',
			id: 156,
		},
		{
			thumbnail: '',
			title: 'Title2',
			author: 'Author2',
			ups: 1,
			date: '2023-02-23T11:45:00.000Z',
			id: 143,
		},
		{
			thumbnail: '',
			title: 'Title3',
			author: 'Author3',
			ups: 21,
			date: '2023-02-26T00:45:00.000Z',
			id: 15,
		},
		{
			thumbnail: '',
			title: 'Title4',
			author: 'Author4',
			ups: 34,
			date: '2023-02-25T01:35:00.000Z',
			id: 13,
		},
	];

	return (
		<ul className={style.list}>
			{postsData.map((postData) =>
				(<Post key={postData.id} postData={postData} />))
			}
		</ul>
	);
};

