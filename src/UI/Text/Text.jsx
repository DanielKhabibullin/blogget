import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
	const {
		As = 'span',
		color = 'black',
		size,
		tsize,
		dsize,
		className,
		children,
		href,
		center,
		left,
		weight,
	} = prop;

	const classes = classNames(
		className,
		style[color],
		{[style.center]: center},
		{[style.left]: left},
		{[style[`fs${size}`]]: size},
		{[style[`fst${tsize}`]]: tsize},
		{[style[`fsd${dsize}`]]: dsize},
		{[style.bold]: weight === 'bold'},
		{[style.medium]: weight === 'medium'},
	);

	return (
		<As className={classes} href={href}>{children}</As>
	);
};

Text.propTypes = {
	As: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
	tsize: PropTypes.number,
	dsize: PropTypes.number,
	className: PropTypes.string,
	dateTime: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string,
		PropTypes.object,
		PropTypes.number,
		PropTypes.node,
	]),
	href: PropTypes.string,
	center: PropTypes.bool,
	weight: PropTypes.string,
};
