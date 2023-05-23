import style from './Rating.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Rating = ({ups}) => (
	<div className={style.rating}>
		<button className={style.up} aria-label='Upvote rating' />
		<p className={style.ups}>{ups}</p>
		<button className={style.down} aria-label='Downvote rating' />
	</div>
);

Rating.propTypes = {
	ups: PropTypes.number,
};
