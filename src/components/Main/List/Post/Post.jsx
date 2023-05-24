import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Time from './Time';
import Title from './Title';
import Author from './Author';
import {ReactComponent as DeleteIcon} from './img/delete.svg';


export const Post = ({postData}) => {
	const {title, author, ups, date} = postData;
	return (
		<li className={style.post}>
			<button className={style.delete}>
				<DeleteIcon/>
			</button>
			<img className={style.img} src={notphoto} alt="" />
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
