import style from './Date.module.css';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../../utils/formatDate';
import {Text} from '../../../../../UI/Text/Text';

export const Date = ({date}) => (
	<Text As='time'
		className={style.date}
		dateTime={date}
		size={10}
		tsize={16}
	>
		{formatDate(date)}
	</Text>
);

Date.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
};
