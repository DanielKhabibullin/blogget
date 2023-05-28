import {Text} from '../../../UI/Text/Text';
import {Date} from '../../Main/List/Post/Date/Date';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => (
	comments.length ?
		<ul className={style.list}>
			{
				comments.map(({id, author, body, created}) => (
					<li key={id} className={style.item}>
						<Text As='h3' className={style.author}
							size={18} tsize={22}>{author}</Text>
						<Text As='p' className={style.comment} size={14} tsize={18}>
							{body}
						</Text>
						<Date date={created} />
					</li>
				))
			}
		</ul> :
		<Text As='h3' className={style.author}
			size={18} tsize={22}>No comments</Text>
);


Comments.propTypes = {
	comments: PropTypes.array
};
