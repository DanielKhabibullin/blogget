import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const Thumbnail = ({thumbnail, title}) => (
	<img className={style.img}
		src={thumbnail === 'self' ? notphoto : thumbnail} alt={title} />
);

Thumbnail.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
};
