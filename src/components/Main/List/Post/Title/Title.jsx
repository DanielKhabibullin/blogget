import style from './Title.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';


export const Title = ({title}) => (
	<Text As='h2' className={style.title}>
		<Text
			className={style.linkPost}
			href="#post"
			size={18}
			tsize={24}
		>
			{title}
		</Text>
	</Text>
);

Title.propTypes = {
	title: PropTypes.string,
};
