import style from './Post.module.css';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Date from './Date';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Thumbnail} from './Thumbnail/Thumbnail';
import {Content} from './Content/Content';


export const Post = ({postData}) => {
	const {
		id,
		title,
		author,
		ups,
		date,
		thumbnail,
	} = postData;
	return (
		<li className={style.post}>
			<Thumbnail title={title} thumbnail={thumbnail} />
			<Content id={id} title={title} author={author} />
			<Rating ups={ups} />
			<Date date={date} />
			<button className={style.delete}>
				<DeleteIcon />
			</button>
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
