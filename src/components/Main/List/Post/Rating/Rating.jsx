import style from './Rating.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {Text} from '../../../../../UI/Text/Text';

export const Rating = ({ups}) => (
	<div className={style.rating}>
		<button className={style.up} aria-label='Upvote rating' />
		<Text As='p'
			className={style.ups}
			size={12}
			tsize={16}
			color='grey99'
			bold
		>
			{ups}
		</Text>
		<button className={style.down} aria-label='Downvote rating' />
	</div>
);

Rating.propTypes = {
	ups: PropTypes.number,
};
