import formatDate from '../../../../../utils/formatDate.js';
import style from './Time.module.css';
import PropTypes from 'prop-types';

export const Time = ({date}) => (
	<time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

Time.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
};
