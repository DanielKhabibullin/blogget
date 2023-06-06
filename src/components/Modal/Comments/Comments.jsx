import {Text} from '../../../UI/Text/Text';
import {Date} from '../../Main/List/Post/Date/Date';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => (
	comments.length ?
		<ul className={style.list}>
			{
				comments.map(comment => comment.body && (
					<li key={comment.id} className={style.item}>
						<Text As='h3' className={style.author}
							size={18} tsize={22}>{comment.author}</Text>
						<Text As='p' className={style.comment} size={14} tsize={18}>
							{comment.body.replaceAll(`&gt;`, '')}
						</Text>
						<Date date={comment.created} />
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
