import style from './Post.module.css';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Time from './Time';
import Title from './Title';
import Author from './Author';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Thumbnail} from './Thumbnail/Thumbnail';


export const Post = ({postData}) => {
	const {title, author, ups, date, thumbnail} = postData;
	return (
		<li className={style.post}>
			<Thumbnail title={title} thumbnail={thumbnail} />
			<button className={style.delete}>
				<DeleteIcon/>
			</button>
			<div className={style.content}>
				<Title title={title}></Title>
				<Author author={author}></Author>
			</div>
			<Rating ups={ups}></Rating>
			<Time date={date}></Time>
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
