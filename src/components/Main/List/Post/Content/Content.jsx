import {Text} from '../../../../../UI/Text/Text';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';

export const Content = ({id, title, author}) => {
	const {page} = useParams();
	return (
		<div className={style.content}>
			<Text As='h2' className={style.title}>
				<Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
					<Text
						className={style.linkPost}
						size={14}
						tsize={24}
						bold
					>
						{title}
					</Text>
				</Link>
			</Text>
			<Text
				As='a'
				size={12}
				tsize={14}
				color='orange'
				className={style.linkAuthor}
				href={`#${author}`}
				medium
			>
				{author}
			</Text>
		</div>
	);
};

Content.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	id: PropTypes.string,
};
