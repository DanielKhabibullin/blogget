import style from './Author.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';

export const Author = ({author}) => (
	<Text
		As='a'
		size={12}
		tsize={14}
		color='orange'
		className={style.linkAuthor}
		href='#author'
	>
		{author}
	</Text>
);

Author.propTypes = {
	author: PropTypes.string,
};
